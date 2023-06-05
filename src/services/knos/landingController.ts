import {API} from "@/services/knos/typings";
import {request} from "@@/plugin-request/request";

/** 查询登录首页数据 */
export async function queryLandingData(
  body:  API.PageBaseReq,
  options?: { [key: string]: any }
) {
  return request<API.PageResult<API.Landing>>('/api/landing/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}
export async function queryHomeData(
  body:  API.PageBaseReq,
  options?: { [key: string]: any }
) {
  return request<API.PageResult<API.HomeData>>('/api/landing/queryHomeData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}

