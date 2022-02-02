import { Proposal , Section , Url } from "../types/common";

export async function fetchData<T>(section:Section,method:string): Promise<T>{
    const data = await fetch(`${Url}/${section}/${method}`,{ mode:'cors' })
    return await data.json()
}

export async function contactWithUs(section:string,data: Proposal) {
    await fetch(`${Url}/${section}/proposal/`,{ 
        method:'POST',
        body:JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
}