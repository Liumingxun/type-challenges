// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0]: never
type First<T extends any[]> = T extends [infer First, ...any] ? First : never


/* 知识点
1. extends 类型 判断
2. 获取 tuple 的长度
3. extends union 判断
4. infer 使用 (推断)
 */

type A = [1, 2, 3]
type B = []
type TA = A[number]    // union
type TB = B[number]
type cases = [
  A[0] extends TA ? A[0] : never,
  // @ts-expect-error
  B[0] extends TB ? B[0] : never
]
// JS

const first = (arr: any[]) => {
  const [first, ...rest] = arr
  // return first ? first : never
  return arr[0]
  // if arr.length === 0 (长度为 0 ) | arr === [] ( arr 是个空数组)
  //   return undefined
}
