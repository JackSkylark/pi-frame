import * as path from "path";
import * as webpack from "webpack";
import * as webpackNodeExternals from "webpack-node-externals";

const nodeEnv = process.env.NODE_ENV;
const srcPath = path.resolve(__dirname, "./src");

let plugins: webpack.Plugin[] = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(nodeEnv)
        }
    })
];

const config: webpack.Configuration =  {
    mode: "development",
    plugins: plugins,
    target: "node",
    entry: {
        "server" : [ 
            path.resolve(srcPath, "main.ts") 
        ]
    },  
    watch: true,
    externals: [ 
        webpackNodeExternals({
            whitelist: ["webpack/hot/poll?100"]
        })
    ],  
    output: {
        publicPath: "./",
        path: path.resolve(__dirname, "../../build"),
        filename: "server.js",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loaders: ["ts-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false
    }
}

export default config;
