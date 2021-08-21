/*
 * @Descripttion: lesson5 基本类型
 * @version: 0.1.0
 * @Author: Charles Guo
 * @Date: 2021-08-21 17:12:12
 * @LastEditors: Charles Guo
 * @LastEditTime: 2021-08-21 17:31:20
 */
// 原始类型
let bool: boolean = true
let num: number = 5
let str: string = 'lesson5'

// 数组
let arr1: number[] = [1,2,3]
let arr2: Array<number> = [1,2,3]

// 元组 限定了个数和类型
let tuple: [number, string] = [2, 'lesson5']

// 元组越界问题

// 函数
let add = (x:number, y:number) => x + y

// 对象
let obj: object = {x: 1, y: 1}
let s1: symbol = Symbol()
let s2 = Symbol()