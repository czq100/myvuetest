module.exports = {
    devServer: {
        proxy: {
            "/dict": {
                target: "http://api.open.zhaopin.com",
            }
        }
    }
};