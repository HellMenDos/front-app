import { Proposal , Section , Url } from "../types/common";

export async function fetchData<T>(section:Section,method:string): Promise<T>{
    const data = await fetch(`${Url}/${section}/${method}`,{ mode:'cors' })
    return await data.json()
}

export async function contactWithUs(section:Section,data: Proposal) {
    // await axios.post(`${Url}/${section}/proposal/`,{ ...data })
}