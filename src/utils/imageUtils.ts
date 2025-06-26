import { supabase } from '../lib/supabase';

/**
 * Gets the appropriate image URL based on the environment
 * @param imagePath The path to the image (either local path or Supabase path)
 * @returns The full URL to the image
 */
export const getImageUrl = (imagePath: string): string => {
  // If the image is already a full URL, return it as is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }

  // In production, use Supabase Storage
  if (import.meta.env.PROD) {
    // Extract the filename from the path
    const filename = imagePath.split('/').pop();
    return `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/product-images/${filename}`;
  }

  // In development, use the local path
  return imagePath;
};
