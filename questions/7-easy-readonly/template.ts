type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}

interface Person {
    name: string
    age: number
    jobs: string
    house: string[]
}

type readOnlyPerson = MyReadonly<Person>
// {readonly name: string, readonly age: number, readonly jobs: string, readonly house: string[]}

type personKeys = keyof Person
// "name" | "age" | "jobs" | "house"

/**
 * T
 *      -> Person
 * keyof T
 *      -> "name" | "age" | "jobs" | "house"
 * [P in keyof T]: T[P]
 *      -> name: Person[name]
 *          -> name: string
 *      -> age: Person[age]
 *          -> age: number
 *      etc...
 */



const p1: Person = <Person>{}
const p2: Person = {} as Person

// 1. 返回一个对象
// 2. 遍历一个 interface
//      : 使用 keyof (lookup)
//      : in 遍历
// 3. readonly 关键字
// 4. 使用 key 获取值 （indexed）
//      : T[P]




