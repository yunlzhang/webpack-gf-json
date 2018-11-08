## describe
A webpack-plugin to generate a json file contain  compiled files's name,distinguished different types of file



## how to use

    npm install webpack-gf-json --save-dev

    
add to webpack.config.js 
```js
    const WebpackGfJson = require('webpack-gf-json');
    const webpackConfig = {
        plugins: [
            new WebpackGfJson({
                filename:'file1.json'
            })
        ]
        // other webpack config ...
    }

```


## config

```js
{
    filename："out file's name" //the out json file's name. "file.json" is what is default;
}

```