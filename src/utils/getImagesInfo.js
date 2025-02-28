import fs from 'fs';
import path from 'path';

export function getImagesInfo(root = process.cwd()) {
  // Define the directory where your images are stored.
  const imagesDir = path.join(root, 'public/images');
  
  // Read all files in the images directory and filter for common image extensions.
  let files = fs
    .readdirSync(imagesDir)
    .filter((file) => /\.(jpe?g|png|gif)$/i.test(file));
  
  // (Optional) Sort files alphabetically.
  files.sort();
  
  // Set the number of images per page.
  const perPage = 48;
  const totalPages = Math.ceil(files.length / perPage);
  
  return { files, perPage, totalPages };
}
