type TupleToObject<Type extends readonly (string | number | symbol)[]> = {
    // T -> "tesla" | "model 3" | "model X" | "model Y"
  [P in Type[number]]: P
}

// extends => 类型约束
// Type extends readonly (string | number | symbol)[]
//  => Type 只能是 readonly string[] | readonly number[] | readonly symbol[]

// JS
function tupleToObject(arr: []) {
  const obj = {}
  arr.forEach((val) => {
    obj[val] = val
  })
  return obj
}

/** 实现
 * 1. 返回对象
 * 2. 遍历数组
 *    in T[number]
 * 4. 生成键值
 *    [P in T[number]]: P
 */



