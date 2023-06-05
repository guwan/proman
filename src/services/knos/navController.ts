// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {API} from "@/services/knos/typings";


/** saveCategory POST /api/nav/add */
export async function addNav(body: API.Nav, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/nav/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete POST /api/nav/delete */
export async function deleteNav(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeleteReq,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject_>('/api/nav/delete', {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}

/** saveCategory POST /api/category/update */
export async function updateNav(body: API.Nav, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/nav/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** search POST /api/nav/query */
export async function queryNav(
  body: API.PageReq<API.Nav> & API.PageBaseReq,
  options?: { [key: string]: any }
) {
  return request<API.PageResult<API.PageRes<API.Nav[]>>>('/api/nav/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}
