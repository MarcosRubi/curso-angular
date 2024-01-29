export function whatsMyType<T>(argument: T ): T {
  return argument;
}

const amIString = whatsMyType<string>('Hola')
const amINumber = whatsMyType<number>(213)
const amIArray = whatsMyType<number[]>([1,2,3])

amIString.split('')
amINumber.toFixed(2)
amIArray.push(4)