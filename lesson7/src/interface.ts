interface List {
    readonly id: number,
    name: string,
    // [x: string]: any
    age?: number
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(value => {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
    })
}

let result = {
    data: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
    ]
}

render(result)
// render(result as Result)
// render(<Result>result)

// 当属性数量不固定时可以使用可索引类型的接口
// 数字索引

interface StringArray {
    [index: number]: string
}

let chars: StringArray = ['A', 'B']

interface Names {
    [x: string]: string,
    [z: number]: string
}

