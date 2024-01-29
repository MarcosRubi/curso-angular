import { Product, taskCalculation } from './04-functions-destructuring';

const TAX = 0.15
const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 300
    }
]

const [total, tax] = taskCalculation({products: shoppingCart, tax:TAX})

console.log('total:', total);
console.log('tax:', tax);