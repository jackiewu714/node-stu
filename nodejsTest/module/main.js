/**
 * Created by WuLiangzhi on 2017/4/5.
 */

var hello = require('./hello');
hello.world();


var helloObj = require('./HelloObj');
var ho = new HelloObj();
ho.setName('Jackie Wu');
ho.sayHello();