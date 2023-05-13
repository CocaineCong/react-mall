declare namespace API {
    export type CategoryListResp = {
        status?: number;
        data?: {
            item?: CategoryListDataItem[];
            total?: number;
        };
        msg?: string;
        error?: string;
        track_id?: string;
    }

    export type CategoryListDataItem = {
        id?: number;
        category_name?: string;
        created_at?: number;
    }
}