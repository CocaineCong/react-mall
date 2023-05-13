import instance from "../index";

export async function getCarouselListAPI (body?: any, options?: { [key: string]: any }) {
    return  instance<API.CarouselResp>(`/api/v1/carousel/list`, {
        method: 'GET',
        ...(options || {}),
    });
}

