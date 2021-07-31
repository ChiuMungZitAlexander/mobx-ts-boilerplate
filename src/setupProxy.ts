import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = (app) => {
  app.use(
    // proxy URL
    '/',
    createProxyMiddleware({
      // target: REACT_APP_API_URL,
      secure: false,
      logLevel: 'debug',
      onError: (err, req, res) => {
        res.writeHead(500, {
          'Content-Type': 'text/plain',
        });
        res.end('服务器错误，请刷新页面');
      },
    }),
  );
};
