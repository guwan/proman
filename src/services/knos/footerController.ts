// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {API} from "@/services/knos/typings";


/** saveCategory POST /api/footer/add */
export async function addFooter(body: API.Footer, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/footer/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete POST /api/footer/delete */
export async function deleteFooter(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeleteReq,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject_>('/api/footer/delete', {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}

/** saveCategory POST /api/category/update */
export async function updateFooter(body: API.Footer, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/footer/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** search POST /api/footer/query */
export async function queryFooter(
  body: API.PageReq<API.Footer> & API.PageBaseReq,
  options?: { [key: string]: any }
) {
  return request<API.PageResult<API.PageRes<API.Footer[]>>>('/api/footer/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}
