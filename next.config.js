/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/nosuke-shin.portfolio" : "",
  trailingSlash: true,
};
