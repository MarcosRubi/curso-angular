export interface Passenger{
    name:string,
    children?: string[]
}

const passenger1: Passenger = {
    name: 'Marcos'
}
const passenger2: Passenger = {
    name: 'Daniel',
    children: ['Rubi', 'Hernandez']
}

const printChildren = ({name, children}: Passenger)=>{
    const howManyChildren = children?.length || 0

    return (howManyChildren); 
}

console.log(printChildren(passenger1));