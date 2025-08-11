var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.speak = function () {
        console.log("\u6211\u53EB: ".concat(this.name, ", \u4ECA\u5E74").concat(this.age, "\u5C81"));
    };
    return Person;
}());
var p1 = new Person('张三', 18);
p1.speak();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, grade) {
        var _this = _super.call(this, name, age) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.speak = function () {
        console.log("\u6211\u662F\u5B66\u751F\uFF0C\u6211\u53EB: ".concat(this.name, ", \u4ECA\u5E74").concat(this.age, "\u5C81"));
    };
    Student.prototype.study = function () {
        console.log("".concat(this.name, "\u6B63\u5728\u52AA\u529B\u5B66\u4E60\u4E2D......"));
    };
    return Student;
}(Person));
var s1 = new Student('李同学', 16, '高三');
console.log(s1);
s1.study();
s1.speak();
