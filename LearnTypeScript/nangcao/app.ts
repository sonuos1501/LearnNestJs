/// Array
let numbers: number[] = [1,2,3]
let strings: Array<string> = ['one', 'two', 'three']


console.log("numbers: " + numbers)
console.log("strings: " + strings)

/// tuple
let person: [string, number, boolean] = ['Son', 25, true]
console.log("person: " + person)

/// Enum
enum Color {
    Red = 1,
    Green,
    Blue,
}

let c: Color = Color.Green
console.log("Color: " + c)

/// Any
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
console.log("Any: " + randomValue)

/// Union: Chỉ sử dụng được 2 kiểu giữ liệu này
let id: number | string
id = 101
// id = "Son"
console.log("Union: " + id)