/** @type {import('next').NextConfig} */
const nextConfig = {

        images: {
          remotePatterns: [
            {
              protocol: 'http',
              hostname: 'links.papareact.com',

            },
          ],
        },

};

export default nextConfig;
