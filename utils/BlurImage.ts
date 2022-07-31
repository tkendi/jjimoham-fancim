import { encode } from 'blurhash';

const loadImage = async (src: string) => {
  const img = new Image();
  img.src = src;
  img.crossOrigin = 'anonymous';

  //   img.onload = () => resolve(img);
  //   img.onerror = (args) => reject(args);
  return img;
};

const getImageData = (image: HTMLImageElement) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  console.log(image);
  console.log(image.width, image.height);

  canvas.width = image.width;
  canvas.height = image.height;

  context?.drawImage(image, 0, 0);

  return context?.getImageData(10, 80, 1920, 1080);
};

export const encodedImageToBlurhash = async (imageUrl: string) => {
  if (imageUrl) {
    const image = await loadImage(imageUrl);

    const imageData = getImageData(image);
    console.log('image data', imageData?.data);
    return encode(imageData?.data, imageData?.width, imageData?.height, 4, 4);
  }
};
