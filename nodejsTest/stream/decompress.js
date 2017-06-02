/**
 * Created by WuLiangzhi on 2017/4/5.
 */

var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input_decompress.txt'));

console.log('文件解压缩完成。');