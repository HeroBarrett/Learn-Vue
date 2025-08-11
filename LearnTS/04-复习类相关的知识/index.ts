class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  speak() {
    console.log(`我叫: ${this.name}, 今年${this.age}岁`);
    
  }
}
const p1 = new Person('张三', 18)
p1.speak()

class Student extends Person {
  grade: string
  constructor(name:string, age:number, grade:string) {
    super(name, age)
    this.grade = grade
  }
  override speak(): void {
    console.log(`我是学生，我叫: ${this.name}, 今年${this.age}岁`);
    
  }
  study() {
    console.log(`${this.name}正在努力学习中......`);
    
  }
}

const s1 = new Student('李同学', 16, '高三')
console.log(s1);

s1.study()
s1.speak()