function Demo(target: Function) {
  console.log(target);
  
}

@Demo
class Person {
  constructor(name: string, age: number) { }
}