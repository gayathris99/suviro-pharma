// ═══════════════════════════════════════════
// CLOUDINARY SERVER HELPER (signed)
// ───────────────────────────────────────────
// Uploads resumes (PDF/DOCX) server-side from /api/apply using
// signed credentials, as resource_type: 'raw' (not an image).
// ═══════════════════════════════════════════

import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Cloudinary's 'raw' delivery URL is the public_id verbatim — it does NOT
// append a file extension the way image/video uploads do. Without an
// extension in the public_id, downloads get a random name with no .pdf/.docx
// suffix and the wrong Content-Type. So we build the public_id from the
// original filename ourselves, keeping its extension.
export function uploadCv(buffer, originalFilename) {
  const ext = (originalFilename.split('.').pop() || 'pdf').toLowerCase()
  const base = originalFilename
    .replace(/\.[^/.]+$/, '')
    .replace(/[^a-zA-Z0-9-_]+/g, '_')
    .slice(0, 60)
  const publicId = `${Date.now()}-${base}.${ext}`

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: 'raw', folder: 'suviro-cvs', public_id: publicId },
      (err, result) => (err ? reject(err) : resolve(result))
    )
    stream.end(buffer)
  })
}
