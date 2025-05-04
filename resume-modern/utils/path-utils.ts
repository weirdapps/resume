/**
 * Returns the correct path for assets based on environment
 * Works with the basePath configuration in next.config.js
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === "production" ? "/resume" : "";
  
  // Remove leading slash to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  
  return `${basePath}/${cleanPath}`;
}