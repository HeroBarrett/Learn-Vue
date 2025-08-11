abstract class Package {
  // 构造方法
  constructor(public weight: number) { }
  // 抽象方法
  abstract calculate(): number
  // 具体方法
  printPackage() {
    console.log(`包裹重量为: ${this.weight}kg,运费为: ${this.calculate()}元`);
  }
}

class StandardPackage extends Package {
  constructor(
    public weight: number,
    public unitPrice: number
  ) { super(weight) }
  calculate(): number {
    return this.weight * this.unitPrice
  }
}

class ExpressPackage extends Package {
  constructor(
    public weight: number,
    public unitPrice: number,
    public additional: number
  ) { super(weight) }
  calculate(): number {
    if (this.weight > 10) {
      // 超出10kg的部分,每公⽄多收additional对应的价格
      return 10 * this.unitPrice + (this.weight - 10) * this.additional
    } else {
      return this.weight * this.unitPrice;
    }
  }
}

const e1 = new ExpressPackage(13, 8, 2)
e1.printPackage()
