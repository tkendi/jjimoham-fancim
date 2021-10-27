// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
// }

const debug = process.env.NODE_ENV !== "production";
const name = "small-magic-project-deployment";

module.exports = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://chamyungjun.github.io/tkendi-blog/"
      : "",
};

// module.exports = {
//   images: {
//     loader: (width, src, quality) =>
//       `/preprocessed-images/${filename}-${width}.jpg`,
//   },
// };
