// 1. 不清楚的数据类型
// let welcome = 'hello' 
// welcome() // 此⾏报错:TypeError: welcome is not a function


// 2.有漏洞的逻辑

// const str = Date.now() % 2 ? '奇数' : '偶数'
// if (str !== '奇数'){
// 	alert('hello') 
// }else if(str === '偶数'){
// 	alert('world') }

// 3. 访问不存在的属性


// const obj = { width: 10, height: 15 }; 
// const area = obj.width * obj.heigth;


// 4. 低级的拼写错误


// const message = 'hello,world' message.toUperCase() //遗漏了一个"p"


// 5.静态类型检查

/* - 在代码运⾏前进⾏检查,发现代码的错误或不合理之处,减⼩运⾏时出现异常的⼏率,此种检查叫『静态类型检查』
TypeScript 和核⼼就是『静态类型检查』,简⾔之就是把运⾏时的错误前置
- 同样的功能,TypeScript的代码量要⼤于JavaScript,但由于TypeScript的代码结构更加清晰
在后期代码的维护中TypeScript却胜于JavaScript */