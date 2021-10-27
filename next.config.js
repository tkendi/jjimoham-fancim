// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
// }

const debug = process.env.NODE_ENV !== "production";
const name = "small-magic-project-deployment";

module.exports = {
  assetPrefix: !debug ? `/${name}/` : "",
};

// module.exports = {
//   images: {
//     loader: (width, src, quality) =>
//       `/preprocessed-images/${filename}-${width}.jpg`,
//   },
// };
