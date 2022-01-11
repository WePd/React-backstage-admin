let { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
	app.use(
		"/api",
		createProxyMiddleware({
			target: "http://ihrm-java.itheima.net/",
			changeOrigin: true,
			pathRewrite: {
				"^/api": ""
			}
		})
	)
}
