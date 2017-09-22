// 🎌 BROWSER-SYNC FOR AUTO RELOAD JAZZ-PLUS A BETTER IMPLEMENTATION OF EXTENSIONLESS URLS 🎌
module.exports = {
  server: 'jekyllbuild',
  port: '8080',
  open: false,
  notify: false,
  serveStatic: [
    'jekyllbuild',
  ],
  serveStaticOptions: {
    extensions: ['html'],
  },
};
