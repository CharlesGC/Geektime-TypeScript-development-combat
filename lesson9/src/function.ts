/*
 * @Descripttion: ts中的函数
 * @version: 
 * @Author: Charles Guo
 * @Date: 2021-08-22 15:09:21
 * @LastEditors: Charles Guo
 * @LastEditTime: 2021-08-22 15:18:57
 */
function add1(x: number, y: number) {
    return x + y
}

let add2: (x: number, y: number) => number

type add3 = (x: number, y: number) => number

interface add4 {
    (x: number, y: number): number
}
// 函数参数严格

//可选参数 可选参数必须位于必选参数之后
function add5(x: number, y?: number) {
    return y ? x + y : x;
}

// 参数默认值
function add6(x: number, y= 0, z: number, q= 1) {
    return x + y + z + q;
}

// 剩余参数
function add7(x:number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur);
}

// 函数重载
// 先定义一系列的函数声明，先定义具体实现 最后在类型最宽泛的函数实现
// 两个函数名称相同，参数个数不同或者类型不同
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
    let first = rest[0]

    if (typeof first === 'string') {
        return rest.join('');
    }

    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
}

// console.log(add8(1, 2, 3));
// console.log(add8('my', ' ', 'name', ' ','is', ' ','guochao'));

