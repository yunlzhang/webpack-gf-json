class WebpackGfJson {
    constructor(props){
        this.props = props;
    }

    apply(compiler) {
      compiler.hooks.emit.tapAsync('WebpackGfJson', (compilation, callback) => {
        const filelist = {}
        for (var filename in compilation.assets) {
          const splitArr = filename.split('.');
          const ext = splitArr[splitArr.length - 1];
          if(!filelist[ext]){
            filelist[ext] = [filename];
          }else{
            filelist[ext].push(filename);
          }
        }

        compilation.assets[this.props.filename || 'file.json'] = {
          source() {
            return JSON.stringify(filelist);
          },
          size() {
            return JSON.stringify(filelist).length;
          }
        };
  
        callback();
      });
    }
  }
  
  module.exports = WebpackGfJson;