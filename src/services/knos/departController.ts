// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {API} from "@/services/knos/typings";


/** saveCategory POST /api/depart/add */
export async function addDepart(body: API.Depart, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/depart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete POST /api/depart/delete */
export async function deleteDepart(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeleteReq,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject_>('/api/depart/delete', {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}

/** saveCategory POST /api/category/update */
export async function updateDepart(body: API.Depart, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/depart/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** search POST /api/depart/query */
export async function queryDepart(
  body: API.Depart & API.PageBaseReq,
  options?: { [key: string]: any }
) {
  return request<API.PageResult<API.PageRes<API.Depart[]>>>('/api/depart/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}

/** search POST /api/depart/queryExperts */
export async function queryExperts(
  body: API.PageReq<API.Depart> & API.PageBaseReq,
  options?: { [key: string]: any }
) {
  return request<API.PageResult<API.PageRes<API.Depart[]>>>('/api/depart/queryExperts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}


/** search POST /api/depart/queryExperts */
export async function viewDetail(
  body: API.Depart,
  options?: { [key: string]: any }
) {
  return request<API.Result_<API.DepartDetailPageVo>>('/api/depart/viewDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}
