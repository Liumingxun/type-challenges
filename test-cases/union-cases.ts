interface IPerson {
  readonly name: string
  age: number
  gender: "male" | "female" | "unknown" // union type
  address?: string
  hobby?: string[]
}

const person: IPerson = {
  name: 'luoming',
  age: 22,
  gender: 'male',
  address: 'HeiLongJiang Province'
}

const err_person: IPerson = {
  name: 'error',
  age: 23,
  // @ts-expect-error
  gender: 'person'
}
