var Person = /** @class */ (function () {
    function Person(name, age, IDCard) {
        this.name = name;
        this.age = age;
        this.IDCard = IDCard;
    }
    Person.prototype.getPrivateInfo = function () {
        return "\u8EAB\u4EFD\u8BC1\u53F7\u7801\u4E3A: ".concat(this.IDCard);
    };
    Person.prototype.getInfo = function () {
        return "\u6211\u53EB: ".concat(this.name, "\uFF0C\u4ECA\u5E74\u521A\u6EE1").concat(this.age, "\u5C81");
    };
    Person.prototype.getFullInfo = function () {
        return this.getInfo() + ',' + this.getPrivateInfo();
    };
    return Person;
}());
var p1 = new Person('tom', 18, '123123123123123132');
// p1.name
console.log(p1.getFullInfo(), p1.getFullInfo());
