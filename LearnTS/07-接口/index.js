var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.speak = function (n) {
        for (var i = 0; i < n; i++) {
            // 打印出包含名字和年龄的问候语句
            console.log("\u4F60\u597D\uFF0C\u6211\u53EB".concat(this.name, "\uFF0C\u6211\u7684\u5E74\u9F84\u662F").concat(this.age));
        }
    };
    return Person;
}());
var p1 = new Person('tom', 18);
p1.speak(9);
