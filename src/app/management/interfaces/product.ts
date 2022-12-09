export interface Product {
    code:number;
    name:string;
    description:string;
    price:number;
    acquisitionPrice:number;
    stock:number;
    category:string;
    monthlyStock:number;
    iva?:number;
    source?:string;
}
