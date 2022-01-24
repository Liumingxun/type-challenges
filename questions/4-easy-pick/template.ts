type MyPick<T, K extends keyof T> = {
    [key in K] : T[key]
}

// 遍历 union

// how to fix it with js?

// function MyPick (T: any, K: []) {
//     const res = {}
//     K.forEach((key) => {
//         res[key] = T[key]
//     })
//     return res
// }
