/**
 * Get the correct asset path for images and other static assets
 * This ensures assets work in both development and production
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, Vite serves from the root
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production, ensure the path is relative to the root
  // Vercel will serve from the root of the domain
  return `/${cleanPath}`;
};

/**
 * Get the full URL for a product image
 */
export const getProductImageUrl = (imagePath: string): string => {
  // In production, the images should be in the root /images directory
  if (import.meta.env.PROD) {
    return `/images/products/${imagePath}`;
  }
  // In development, use the path from public directory
  return `/images/products/${imagePath}`;
};

/**
 * Check if an image exists at the given path
 */
export const imageExists = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error(`Error checking if image exists at ${url}:`, error);
    return false;
  }
};
