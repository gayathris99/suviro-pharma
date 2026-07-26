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

export function uploadCv(buffer) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: 'raw', folder: 'suviro-cvs' },
      (err, result) => (err ? reject(err) : resolve(result))
    )
    stream.end(buffer)
  })
}
