declare namespace API {
    export type CartCreateReq = {
        boss_id?: number,
        product_id?: number,
        num?: number,
    }

    export type CartUpdateReq = {
        id?: number;
        num?: number;
    }
}