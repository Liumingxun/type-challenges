type Length<T extends readonly any[]> = T["length"]
// type Length<T extends readonly any[]> = T extends {length: infer P} ? P : never

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TT =typeof tesla
type T = Length<typeof tesla>

let wwa: T;
wwa = 4
// @ts-expect-error
wwa = 3

// 貌似也不是很恰当
// 我觉得可以使用对象定义
type goods_info = [
  number, // 编号
  string, // 名称
  number, // 单价
  Date    // 进货日期
]

const goods_info: goods_info = [1, 'Apple', 25.77, new Date()]
// @ts-expect-error
const err_goods_info: goods_info = [1, 'Apple', 25.77, new Date(),
  22 // 不能添加新属性
]
/*
1. 使用 extends 约束类型
2. tuple 是一个规定好的类型数组
 */
