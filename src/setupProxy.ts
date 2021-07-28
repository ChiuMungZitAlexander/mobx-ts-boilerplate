import { createProxyMiddleware } from 'http-proxy-middleware';

const { REACT_APP_API_URL } = process.env;

module.exports = (app) => {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: REACT_APP_API_URL,
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
