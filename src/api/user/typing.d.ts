declare namespace API {

    export type CommonResp = {
        status: number;
        data: any;
        msg: string;
        error: string;
        track_id: string;
    }

    export type UserRegisterReq = {
        user_name:string;
        nick_name:string;
        password:string;
        key:string;
    }

    export type UpdateUserInfoReq = {
        nick_name:string;
    }

    export type UserLoginReq = {
        user_name:string;
        password:string;
    }

    export type UserLoginResp = {
        user: UserLoginDataResp;
        access_token: string;
        refresh_token: string;
    }

    export type UserLoginDataResp = {
        id: number;
        user_name: string;
        nickname: string;
        type: number;
        email: string;
        status: string;
        avatar: string;
        create_at: number;
    }

}
