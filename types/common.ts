export const Url = 'http://localhost'

export type Section = 'main' | 'tech'

type File = {
    id:number,
    title:string,
    photo:string
}

export interface Proposal {
    name:string,
    email:string,
    phone:string,
    message:string,
    date:Date
}

export interface Carousel {
    id:number,
    title:string,
    describe:string,
    button_text:string,
    photo:string
}

export interface Page {
    id:number,
    page_title:string,
    title:string,
    describe:string,
    files:File[]
}

export interface ServerData {
    id:number,
    title:string,
    sub_title?:string,
    describe:string,
    button_url?:string,
    files:File[]
}