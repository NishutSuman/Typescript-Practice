
// Generic Array
const johnArr: Array<number> = [];
const names: Array<string> = [];

function identityOne (val: boolean|number): boolean|number{
    return val
}

function identityTwo (val: any):any{

}

function identityThree<Type>(val: Type): Type {
    return val
}
identityThree(3)

function identityFour<T>(val: T): T {
    return val
}

interface Bootle{
    brand: string,
    material: string
}

identityFour<Bootle>({brand: "thumsup", material: "plastic"})


// Generic Function
function products<T>(id: T[]): T{
    return id[3];
}


// Generic Arrow Function
const moreProducts = <T,>(id: Array<T>):T =>{
    return id[3];
}

interface prodData{
    brand: string,
    price: number
}

function multProd<T,U extends  prodData>(val1: T, val2:U): object{
    return {
        val1, val2
    }
}

multProd(3,  {brand: "Amul", price: 10})




// Generic Classes

interface Quiz{
    name: string,
    batch: string
}
interface Course{
    name: string,
    subject: string
}

class Sellable<T,>{
    cart: T[]=[]
    addToCart(prods:T){
        this.cart.push(prods)
    }
}