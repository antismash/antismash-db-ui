var proxyMiddleware = require('http-proxy-middleware');

module.exports = {
  port: 3000,
  open: false,
  files: ["./dist/**/*.{html,css,js,less}"],
  server: {
    baseDir: './dist',
    routes: {
      '/output': '../output'
    },
    middleware: {
      1: proxyMiddleware('/api', {
        target: 'http://localhost:5566',
      changeOrigin: true   // for vhosted sites, changes host header to match to target's host
      }),
      2: proxyMiddleware('/go', {
        target: 'http://localhost:5566',
      changeOrigin: true   // for vhosted sites, changes host header to match to target's host
      }),

    }
  }
};
