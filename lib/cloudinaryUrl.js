// Inserts Cloudinary fetch transforms (width, quality, format) after /upload/.
// Non-Cloudinary URLs are returned unchanged.
export function optimizeCloudinary(url, width = 1400) {
  if (!url || !url.includes('res.cloudinary.com')) return url

  const marker = '/upload/'
  const idx = url.indexOf(marker)
  if (idx === -1) return url

  const base = url.slice(0, idx + marker.length)
  const rest = url.slice(idx + marker.length)

  // Already has a width transform — leave as-is
  if (/^(v\d+\/)?w_\d+/.test(rest)) return url

  const transform = `w_${width},q_auto,f_auto`
  return `${base}${transform}/${rest}`
}
