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
  
  // In production, use relative path
  return `/${cleanPath}`;
};

/**
 * Get the full URL for a product image
 */
export const getProductImageUrl = (imagePath: string): string => {
  return getAssetPath(`images/products/${imagePath}`);
};
