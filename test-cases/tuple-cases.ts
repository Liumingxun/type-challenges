type _goods_info = [
  number, // 编号
  string, // 名称
  number, // 单价
  Date    // 进货日期
]

const _goods_info: goods_info = [1, 'Apple', 25.77, new Date()]
// @ts-expect-error
const err_goods_info: goods_info = [1, 'Apple', 25.77, new Date(),
  22 // 不能添加新属性
]
