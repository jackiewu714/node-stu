/**
 * Created by WuLiangzhi on 2017/4/5.
 */

function HelloObj() {
    var name;
    this.setName = function (thyName) {
        name = thyName;
    };

    this.sayHello = function () {
        console.log("Hello " + name);
    };
};

module.exports = HelloObj;