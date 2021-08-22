/*
 * @Descripttion: 
 * @version: 
 * @Author: Charles Guo
 * @Date: 2021-08-22 15:17:37
 * @LastEditors: Charles Guo
 * @LastEditTime: 2021-08-22 15:37:53
 */
class Man {
    // 构造函数加上 private 私有成员属性，既不能被实例化也不能被继承
    // 构造函数加上 protected 受保护成员属性，不能被实例化只能被继承
    // 构造函数的参数也可以添加修饰符，自动变成实例属性
    constructor(name: string) {
        this.name = name
        this.pee()
    }
    // public 共有成员 对所有人都是可见的
    public name: string
    run() { }
    // private 私有成员 只能在类的本身被调用，不能被类的实例调用，也不能类的子类调用
    private pee() { }
    // 受保护成员 只能在类或者子类中访问，不能在实例中访问
    protected walk() { }
    // 只读属性 不能被更改 一定要初始化或者有初始值
    readonly legs: number = 4
    // 静态属性 只能通过类名来调用，不能通过实例来调用 可以被继承
    static head: number = 1
}
// 1、类成员的属性都是实例属性，而不是原型属性 ，类成员的方法都是实例方法
// 2、实例的属性都必须拥有初始值，或者在constructor 中初始化

console.log(Man.prototype);

let man = new Man('guochao')
// man.pee()
// man.walk()
console.log(man.name);
console.log(Man.head);

// 定义一个子类
// 类的继承
// 类型的成员修饰符
// public private protected readonly static 
class Woman extends Man {
    constructor(name: string, public gender: string) {
        // 派生类的函数必须要有super调用 super代表父类的实例
        super(name)
        this.gender = gender
        // this.walk()
    }
    // gender: string
}

console.log(Woman.head);
