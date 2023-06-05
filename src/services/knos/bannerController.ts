// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {API} from "@/services/knos/typings";


/** saveCategory POST /api/banner/add */
export async function addBanner(body: API.Banner, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/banner/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete POST /api/banner/delete */
export async function deleteBanner(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeleteReq,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject_>('/api/banner/delete', {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}

/** saveCategory POST /api/category/update */
export async function updateBanner(body: API.Banner, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/banner/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** search POST /api/banner/query */
export async function queryBanner(
  body: API.PageReq<API.Banner> & API.PageBaseReq,
  options?: { [key: string]: any }
) {
  return request<API.PageResult<API.PageRes<API.Banner[]>>>('/api/banner/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}
