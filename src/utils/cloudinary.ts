const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

type Options = {
  width?: number;
  quality?: string;
  format?: string;
  crop?: string;
};

export const cldImage = (publicId: string, options: Options = {}) => {
  if (!CLOUD_NAME) {
    throw new Error('Missing VITE_CLOUDINARY_CLOUD_NAME in .env');
  }

  const {
    width = 1200,
    quality = 'auto',
    format = 'auto',
    crop = 'scale',
  } = options;

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/c_${crop},w_${width},q_${quality},f_${format}/${publicId}`;
};
