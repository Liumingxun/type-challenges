import {Equal, Expect, ExpectExtends} from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]

// [3, 2, 1] 是类型
// @ts-expect-error
const arr1: [3, 2, 1] = [0, 0, 0]

const arr2: [(x: string) => boolean, 3, number, "233"] = [
  () => true,
  3,
  233,
  "233"
]

const f = () => true

type T2 = (x: string) => boolean
type T3 = typeof f

type casesType = [
  ExpectExtends<T3, T2>
]
