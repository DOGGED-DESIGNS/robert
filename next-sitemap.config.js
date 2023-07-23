const siteUrl = "https://www.martingregjames.com/";
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
