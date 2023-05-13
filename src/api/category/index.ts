import instance from "../index";

export async function getCategoryListAPI (body?: any, options?: { [key: string]: any }) {
    return  instance<API.CategoryListResp>(`/api/v1/category/list`, {
        method: 'GET',
        ...(options || {}),
    });
}

