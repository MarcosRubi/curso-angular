export interface Product{
    description: string
    price: number
}

const phone: Product ={
    description: 'Nokia A1',
    price: 150.0
}
const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

const shoppingCart = [phone, tablet]
const TAX = 0.15

interface TaxCalculationOptions{
    tax: number,
    products: Product[]
}

// function taskCalculation({products, tax}:TaxCalculationOptions): [number, number] {
export function taskCalculation(options:TaxCalculationOptions): [number, number] {
    let total = 0
    const {tax, products} = options
    
    products.forEach(({price})=>{
        total += price
    })

    return [total, total * tax]
}

const [total, tax] = taskCalculation({products: shoppingCart, tax:TAX})

console.log('total:', total, 'Tax:', tax);


export {}