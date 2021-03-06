const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'D-cen: Your first decentralized experience', // Navigation and Site Title
  siteTitleAlt: 'D-cen', // Alternative Site title for SEO
  siteUrl: '', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo_dcen.png', // Used for SEO and manifest
  siteDescription:
    'Unlock all your restrictions to your first decentralized experience with us, the last jigsaw you need',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
