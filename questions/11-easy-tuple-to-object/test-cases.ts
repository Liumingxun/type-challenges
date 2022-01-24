import { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type tupleType = typeof tuple
// readonly ["tesla", "model 3", "model X", "model Y"]


let tuple2 = ['test', 'realTest'] as const
// 字符串常量 的 类型 就是字符串本身

let str = "str"
type s = typeof str
const strConst = "strConst"
type sC = typeof strConst

let arr = [""]
type arr = typeof arr
const arrConst = [""]
type arrC = typeof arr

type case2 = [
  Expect<Equal<arr, arrC>>,
  Expect<Equal<sC, "strConst">>
]

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
  Expect<Equal<TupleToObject<typeof tuple2>, {test: 'test'; 'realTest': 'realTest'}>>
]

type w = typeof tuple

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

/**
 * const let <== JS
 * type interface <== TS
 *
 * typeof JS => TS
 */


// typeof

type funT = (x: never) => boolean
type K1 = ReturnType<funT>

const funC = (x: boolean) => {
  return {
    res: x
  }
}
type K2 = typeof funC
type K3 = ReturnType<typeof funC>


