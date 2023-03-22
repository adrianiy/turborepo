const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
    reactStrictMode: true,
    transpilePackages: ["ui"],
    webpack: (config) => {
        config.plugins.push(
            new NextFederationPlugin({
                name: "docs",
                filename: "static/chunks/remoteEntry.js",
                exposes: {
                    './Docs': './pages/index',
                },
                shared: {}
            })
        );
        return config;
    }
};
