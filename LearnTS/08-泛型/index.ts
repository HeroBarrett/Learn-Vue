function logData<T, U>(data1: T, data2: U): T | U {
  return Date.now() % 2 ? data1 : data2;
}

logData<number, boolean>(100, true)
logData<string, number>('hello', 666)


interface PersonInterface<T> {
  name: string,
  age: number,
  extraInfo: T
}