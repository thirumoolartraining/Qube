/**
 * Gets the appropriate image URL based on the environment
 * @param filename The filename of the image (e.g., '21stcentury-biotin.png')
 * @returns The full URL to the image
 */
export const getImageUrl = (filename: string): string => {
  // If the image is already a full URL, return it as is
  if (filename.startsWith('http')) {
    return filename;
  }

  // In production, use the public URL
  if (import.meta.env.PROD) {
    return `/images/products/${filename}`;
  }

  // In development, use the public URL (relative to the public directory)
  return `/images/products/${filename}`;
};
