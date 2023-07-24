const siteUrl = "https://www.robertallenmiller.com/";
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/admin/" },
      { userAgent: "*", disallow: "/login" },
      { userAgent: "*", allow: "/" },
    ],
  },
};
