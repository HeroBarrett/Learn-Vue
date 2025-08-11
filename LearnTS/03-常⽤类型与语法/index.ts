/**
 * any类型
 */
// let a: any

// a = 99
// a = 'hello'
// a = false

// // let b
// // b = 99
// // b = 'hello'
// // b = false

// let x: string
// x = a

// console.log(x);

/**
 * unknown类型
 */
// let a: unknown

// a = 99
// a = false
// a = 'hello'

// let x: string
// // 第一种
// if (typeof a === 'string') {
//   x = a
// }

// // 第二种（断言）
// x = a as string

// x = <string>a 

// let str1: string
// str1 = 'hello'
// str1.toUpperCase()

// let str2: any
// str2 = 'hello'
// str2.toUpperCase()

// let str3: unknown
// str3 = 'hello';
// (str3 as string).toUpperCase()


/**
 * never类型
 */

// let a: never
// function demo() :never{
//   demo()
// }


// 指定a的类型为string
// let a: string // 给a设置⼀个值
// a = 'hello'

// if (typeof a === 'string'){
// 	console.log(a.toUpperCase())
// }else {
// 	console.log(a) // TypeScript会推断出此处的a是never,因为没有任何⼀个值符合此处的逻辑
// }


/**
 * void类型
 */
// // 无警告
// function logMessage1(msg: string): void {
// 	console.log(msg)
// }
// // 无警告
// function logMessage2(msg: string): void {
// 	console.log(msg)
// 	return;
// }
// // 无警告
// function logMessage3(msg: string): void {
// 	console.log(msg)
// 	return undefined;
// }

// function demo1(): void {

// }
// function demo2(): undefined {

// }

/**
 * object类型
 */
// let a:object  // 存储的类型：非原始类型
// let b:Object  // 存储的类型：可以调用到Object方法的类型

// /* a = {}
// a = {name:'张三'}
// a = [1,3,5,7,9]
// a = function(){}
// a = new String('123')
// class Person {}
// a = new Person() */

// // =================================
// b = {}
// b = {name:'张三'}
// b = [1,3,5,7,9]
// b = function(){}
// b = new String('123')
// class Person {}
// b = new Person()
// // 以上是a有的
// b = 1
// b = true
// b = '你好'

// // 以下不能存：
// // b = null
// // b = undefined


/**
 * 声明对象类型！！！！！
 */
// let person: { 
//   name: string
//   age?: number 
//   [key: string]:any
// }

// person = {name: 'tom', age: 18, gender: '男', city: '北京'}
// console.log(person);

// let count: (a: number, b: number) => number

// count = function (a, b) {
//   return a + b 
// }


/**
 * 元组类型
 */
// let arr1: [string, number]
// let arr2: [string, boolean?]
// let arr3: [string, ...string[]]
// arr1 = ['hello', 100]
// arr2 = ['hello']


/**
 * 枚举类型
 */
