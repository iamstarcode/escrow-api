import { v2 as cloudinary } from 'cloudinary';

export function getCloudinary() {
  cloudinary.config({
    secure: false,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    //api_proxy: 'http://proxy.server:3128',
  });

  return cloudinary;
}
