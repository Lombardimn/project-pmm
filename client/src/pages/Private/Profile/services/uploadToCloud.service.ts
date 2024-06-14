import axios from 'axios'

const CLOUDINARY_URL = import.meta.env.VITE_CLOUD_API_URL

export interface CloudinaryUploadResult {
  secure_url: string
}

export const uploadToCloudinary = async (file: File): Promise<CloudinaryUploadResult> => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'awowomfx')

  try {
    const response = await axios.post(CLOUDINARY_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response.data.secure_url
  } catch (error) {
    console.error('Error subiendo a Cloudinary:', error)
    throw error
  }
}
