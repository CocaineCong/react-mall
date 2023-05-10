declare namespace API {

    export type CarouselResp = {
        status?:number
        data?: {
            items?:carouselItem[],
            total?:number
        }
        count?:string
        msg?:string
    }
    
    export type CarouselItem = {
        id?:number
        carousel_name?:string
    }
}