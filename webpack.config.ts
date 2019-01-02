import * as path from "path";
import * as webpack from "webpack";
import * as webpackNodeExternals from "webpack-node-externals";

const nodeEnv = process.env.NODE_ENV;
const isProduction = nodeEnv !== "development";
const serverSrcPath = path.resolve(__dirname, "./src/server");
const clientSrcPath = path.resolve(__dirname, "./src/client");

let plugins: webpack.Plugin[] = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(nodeEnv)
        }
    })
];

if (!isProduction)
{
    plugins.push(new webpack.HotModuleReplacementPlugin());
}

const config: webpack.Configuration =  {
    mode: "development",
    plugins: plugins,
    target: "node",
    entry: {
        "server" : [ 
            "webpack/hot/poll?100", 
            path.resolve(serverSrcPath, "main.ts") 
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
        path: path.resolve(__dirname, "./build"),
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
