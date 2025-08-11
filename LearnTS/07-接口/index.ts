
interface PersonInterface {
  name: string
  age: number
  speak(n: number): void
}

class Person implements PersonInterface {
  constructor(
    public name: string,
    public age: number

  ) { }

  speak(n: number): void {
    for (let i = 0; i < n; i++) {
      // 打印出包含名字和年龄的问候语句
      console.log(`你好，我叫${this.name}，我的年龄是${this.age}`);
    }

  }
}

const p1 = new Person('tom', 18)
p1.speak(9) 