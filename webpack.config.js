const path = require('path');

module.exports = { 
    "mode": "none", 
    "entry": "./src/app.js", 
    "output": { 
        "path": __dirname + '/docs', 
        "filename": "bundle.js",
    },
    devServer: { 
        static: {
            directory: path.join(__dirname, 'docs') 
        },
        historyApiFallback: true
    },
    "module": {
        "rules": [{
            "test": /\.(css|scss)$/,
            "use": [ "style-loader", "css-loader", "sass-loader" ]
        },
        { 
            "test": /\.js$/, 
            "exclude": /node_modules/, 
            "use": { 
            "loader": "babel-loader", 
            "options": { 
                "presets": [ "@babel/preset-env", ] 
            } 
            } 
        }
        ]
    }
}