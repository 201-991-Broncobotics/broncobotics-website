/** @type {import('next').NextConfig} */
module.exports = {
   reactStrictMode: true,

   async redirects() {
      return [
         {
            source: "/discord",
            destination: "https://discord.gg/8kH9nxjp",
            permanent: false,
         },
         {
            source: "/twitter",
            destination: "https://twitter.com/broncobotics",
            permanent: false,
         },
         {
            source: "/youtube",
            destination:
               "https://www.youtube.com/channel/UC4-iVzitzOrSvx6bt9QqJWA",
            permanent: false,
         },
         {
            source: "/instagram",
            destination: "https://www.instagram.com/broncobotics",
            permanent: false,
         },
         {
            source: "/github",
            destination: "https://github.com/201-991-Broncobotics",
            permanent: false,
         },
         {
            source: "/email",
            destination: "mailto:broncobotics@brophyprep.org",
            permanent: false,
         }
      ];
   },
};
