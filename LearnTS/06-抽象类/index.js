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
var Package = /** @class */ (function () {
    // 构造方法
    function Package(weight) {
        this.weight = weight;
    }
    // 具体方法
    Package.prototype.printPackage = function () {
        console.log("\u5305\u88F9\u91CD\u91CF\u4E3A: ".concat(this.weight, "kg,\u8FD0\u8D39\u4E3A: ").concat(this.calculate(), "\u5143"));
    };
    return Package;
}());
var StandardPackage = /** @class */ (function (_super) {
    __extends(StandardPackage, _super);
    function StandardPackage(weight, unitPrice) {
        var _this = _super.call(this, weight) || this;
        _this.weight = weight;
        _this.unitPrice = unitPrice;
        return _this;
    }
    StandardPackage.prototype.calculate = function () {
        return this.weight * this.unitPrice;
    };
    return StandardPackage;
}(Package));
var ExpressPackage = /** @class */ (function (_super) {
    __extends(ExpressPackage, _super);
    function ExpressPackage(weight, unitPrice, additional) {
        var _this = _super.call(this, weight) || this;
        _this.weight = weight;
        _this.unitPrice = unitPrice;
        _this.additional = additional;
        return _this;
    }
    ExpressPackage.prototype.calculate = function () {
        if (this.weight > 10) {
            // 超出10kg的部分,每公⽄多收additional对应的价格
            return 10 * this.unitPrice + (this.weight - 10) * this.additional;
        }
        else {
            return this.weight * this.unitPrice;
        }
    };
    return ExpressPackage;
}(Package));
var e1 = new ExpressPackage(13, 8, 2);
e1.printPackage();
