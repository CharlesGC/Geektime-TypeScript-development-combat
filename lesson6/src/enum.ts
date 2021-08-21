// 枚举类型 一组具有名字的常量集合
enum Role {
    Reporter,
    Developrt,
    Maintainer,
    Owner,
    Guest
}

// 数字枚举 原理是反向映射
console.log(Role.Reporter); // 0 往后递增

// 字符串枚举 不能被反向映射
enum Message {
    Success = "恭喜你，成功了",
    Fail = '抱歉，失败了'
}

// 异构枚举 混合使用
enum Answer {
    N,
    y = 'Yes'
}

// 枚举成员
// 枚举成员无法修改
enum Char {
    // const
    a,
    b = Char.a,
    // computed
    c = 1 + 2,
    d = Math.random(),
    e = '123'.length,
    f = 4
}

// 常量枚举 编译时会被移除
const enum Month {
    Jan,
    Feb,
    Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'number', b = 'banana' }

let e: E = 3
let f: F = 3

console.log(e);

// e === f
let e1: E.a
let e2: E.b
let e3: E.a
e1 === e3

let g1: G.a
let g2: G.b
