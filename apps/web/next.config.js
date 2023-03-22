const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
    reactStrictMode: true,
    transpilePackages: ["ui"],
    webpack: (config) => {
        config.plugins.push(
            new NextFederationPlugin({
                name: "web",
                filename: "static/chunks/remoteEntry.js",
                remotes: {
                    docs: 'docs@http://localhost:3001/_next/static/chunks/remoteEntry.js',
                },
                shared: {}
            })
        );
        return config;
    }
};
