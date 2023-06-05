// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {API} from "@/services/knos/typings";


/** saveCategory POST /api/honorDisplay/add */
export async function addHonorDisplay(body: API.HonorDisplay, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/honorDisplay/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete POST /api/honorDisplay/delete */
export async function deleteHonorDisplay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeleteReq,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject_>('/api/honorDisplay/delete', {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}

/** saveCategory POST /api/category/update */
export async function updateHonorDisplay(body: API.HonorDisplay, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/honorDisplay/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** search POST /api/honorDisplay/query */
export async function queryHonorDisplay(
  body: API.PageReq<API.HonorDisplay> & API.PageBaseReq,
  options?: { [key: string]: any }
) {
  return request<API.PageResult<API.PageRes<API.HonorDisplay[]>>>('/api/honorDisplay/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}
