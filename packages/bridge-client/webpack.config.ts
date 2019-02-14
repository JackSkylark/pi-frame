import * as webpack from "webpack";
import * as path from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: webpack.Configuration = {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    mode: "development",
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "../../build/public"),
        publicPath: "/"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: ["ts-loader"]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loaders: [
                    "css-hot-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: [
                    "css-hot-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/app.bundle.styles.css",
            chunkFilename: "css/app.bundle.styles.chunk.css"
        })
    ],
    devServer: {
        port: 8081,
        proxy: {
            "/api": "http://localhost:9001"
        }
    }
}

export default config;
