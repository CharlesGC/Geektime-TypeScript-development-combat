// 抽象类 只能被继承，不能被实例化
// abstract 抽象修饰符
abstract class Animal {
    eat() {
        console.log('eat food ');
    }
    // 抽象方法可以不指定 方法的具体实现 明确知道子类中有其他的实现
    abstract sleep() :void
}

// let animal = new Animal()

class oldMan extends Animal {
    constructor(name: string) {
        super()
        this.name = name
    }
    name: string
    // 子类中实现
    sleep() { 
        console.log('man sleep');
    }
}

let lining = new oldMan('lining')

// lining.eat()
// lining.sleep()

// 抽象类可以实现多态 实现运行时绑定
class oldWoman extends Animal{
    sleep() {
        console.log('woman sleep');
    }
}

let ningning = new oldWoman()
// ningning.sleep()

// 实现多态，进而在运行时绑定不同的方法
let people: Animal[] = [lining, ningning]

people.forEach(i => {
    i.sleep()
})

// 特殊的类型 this 可实现链式调用
// 类的成员方法可以返回this

class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}

new WorkFlow().step1().step2()

// this既可以是父类型也可以子类型 实现多态
class Myflow extends WorkFlow {
    next() {
        return this;
    }
}

new Myflow().next().step1().next().step2()