declare namespace API {

    export type CommonResp = {
        status: number;
        data: string;
        msg: string;
        error: string;
        track_id: string;
    }

    export type UserLoginReq = {
        user_name:string;
        nick_name:string;
        password:string;
        key:string;
    }


}
