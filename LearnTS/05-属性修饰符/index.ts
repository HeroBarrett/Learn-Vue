class Person {
  constructor(
    protected name: string,
    protected age: number,
    private IDCard: string
  ) { }
  private getPrivateInfo() {
    return `身份证号码为: ${this.IDCard}`
  }
  getInfo() {
    return `我叫: ${this.name}，今年刚满${this.age}岁`;
  }
  getFullInfo() {
    return this.getInfo() + ',' + this.getPrivateInfo();
  }
}

const p1 = new Person('tom', 18, '123123123123123132')
// p1.name
console.log(p1.getFullInfo() , p1.getFullInfo());


