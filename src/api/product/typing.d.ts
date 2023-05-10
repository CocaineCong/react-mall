declare namespace API {
    export type ProductCreateReq = {
        name:string;
        category_id:string;
        title:string;
        info:string;
        price:float64;
        discount_price:float64;
        num:number;
    }

    export type ProductShowReq = {
        id:number;
    }

    export type ProductListReq = {
        page_size:number;
        page_num:number;
    }

    export type ProductListResp = {
        status: number;
        data: ProductListRespData;
        msg: string;
        error: string;
        track_id: string;
    }

    export type ProductListRespDataItem = {
        id: number;
        name: string;
        category_id: number;
        title: string;
        info: string;
        img_path: string;
        price: string;
        discount_price: string;
        view: number;
        created_at: number;
        num: number;
        on_sale: boolean;
        boss_id: number;
        boss_name: string;
        boss_avatar: string;
    }

    export type ProductListRespData = {
        item: ProductListRespDataItem[];
        total: number;
    }

}