/**
 * Utility functions for handling image URLs
 */

/**
 * Get the full URL for an image
 * @param imagePath The path or URL of the image
 * @returns The full URL to the image
 */
export const getImageUrl = (imagePath: string): string => {
  // If it's already a full URL, return as is
  if (imagePath.startsWith('http') || imagePath.startsWith('blob:')) {
    return imagePath;
  }

  // If it's a path to a local asset, ensure it's relative to the public directory
  if (imagePath.startsWith('/')) {
    return imagePath;
  }

  // Handle relative paths (for local development)
  if (imagePath.startsWith('./') || imagePath.startsWith('../')) {
    return new URL(`/src/assets/images/${imagePath.replace(/^[./]+/, '')}`, import.meta.url).href;
  }

  // Default: assume it's a path relative to the public directory
  return `/assets/images/${imagePath}`;
};
