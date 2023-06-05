// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {API} from "@/services/knos/typings";


/** saveCategory POST /api/functionIcon/add */
export async function addFunctionIcon(body: API.FunctionIcon, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/functionIcon/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete POST /api/functionIcon/delete */
export async function deleteFunctionIcon(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeleteReq,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject_>('/api/functionIcon/delete', {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}

/** saveCategory POST /api/category/update */
export async function updateFunctionIcon(body: API.FunctionIcon, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/functionIcon/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** search POST /api/functionIcon/query */
export async function queryFunctionIcon(
  body: API.PageReq<API.FunctionIcon> & API.PageBaseReq,
  options?: { [key: string]: any }
) {
  return request<API.PageResult<API.PageRes<API.FunctionIcon[]>>>('/api/functionIcon/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}
