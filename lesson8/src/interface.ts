/*
 * @Descripttion: 使用接口定义函数
 * @version: 0.1.0
 * @Author: Charles Guo
 * @Date: 2021-08-22 14:59:16
 * @LastEditors: Charles Guo
 * @LastEditTime: 2021-08-22 15:08:33
 */
// let fun8: (x: number, y: number) => number

// interface Fun8 {
//     (x: number, y: number): number
// }

// 类型别名
type Fun8 = (x: number, y: number) => number

let fun8: Fun8 = (a, b) => a + b

// 混合类型接口
// 一个接口即可定义一个函数，也可以像对象一样拥有属性和方法
interface Lib {
    (): void;
    version: string;
    doSomething(): void
}
function getLib() {
    // 类型断言
    let lib: Lib = (() => { }) as Lib
    lib.version = '1.0.1'
    lib.doSomething = () => { }
    return lib
}

let lib1 = getLib();
lib1()
lib1.doSomething()

let lib2 = getLib()
lib2()


