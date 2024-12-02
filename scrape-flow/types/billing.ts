export enum PackId  {
    SMALL= "SMALL",
    MEDIUM= "MEDIUM",
    LARGE = "LARGE"
}


export type CreditsPack = {
    id: PackId;
    name: string;
    label: string;
    credits: number;
    price: number;
}


export const CreditsPack: CreditsPack[] =[
    {
        id: PackId.SMALL,
        name: "Small Pack",
        label: "1,000 credits",
        credits: 1000,
        price:999
    },
    
]


export const getCeditsPack = (id:PackId) => CreditsPack.find((p)=> p.id === id)