type Length<T extends readonly any[]> = T["length"]
// type Length<T extends readonly any[]> = T extends {length: infer P} ? P : never

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TT =typeof tesla
type T = Length<typeof tesla>

let wwa: T;
