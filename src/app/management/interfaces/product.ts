export interface Product {
    code:number;
    name:string;
    description:string;
    price:number;
    stock:number;
    category:string;
    monthlyStock:number;
    iva?:number;
    source?:string;
}
