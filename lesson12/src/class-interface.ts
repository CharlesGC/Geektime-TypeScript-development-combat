// 接口可以约束类成员的属性和类型
interface Human {
    // new (name: string): void
    name: string;
    eat(): void;
}
// 类实现接口的时候 必须实现接口中所有的属性
// 接口只能约束类的共有成员
// 接口也不能约束类的构造函数
class Asian implements Human {
    constructor(name: string) {
        this.name = name;
    }
    name: string
    eat() { }
    sleep() {}
}

// 接口的继承
// 一个接口可以继承多个接口
// 接口的继承可以抽离出可重用的接口
// 也可以将多个接口合并成一个接口
// 接口也可以继承类，相当于将类成员都抽象出来，只有类的成员接口，没有具体实现

interface SuperMan extends Human {
    run(): void
}

interface Child {
    cry(): void
}

interface Boy extends SuperMan, Child {}

let bobo: Boy = {
    name: '',
    run() { },
    eat() { },
    cry() {}
}

class Auto {
    state = 1
    // private state2 = 0
}
// AutoInteface 抽离了Auto类，也抽离了非共有成员和受保护成员
// 但是C 不是Auto的子类，不能继承非公有成员和受保护成员
interface AutoInterface extends Auto {

}

class C implements AutoInterface {
    state = 1
}

class Bus extends Auto implements AutoInterface {

}