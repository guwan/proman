// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** index GET /api/comment */
export async function indexUsingGET(body: API.PageReqObject_, options?: { [key: string]: any }) {
  return request<API.PageVoComment_>('/api/comment', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete POST /api/comment/delete */
export async function deleteUsingPOST3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingPOST3Params,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject_>('/api/comment/delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** reply POST /api/comment/reply */
export async function replyUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.replyUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject_>('/api/comment/reply', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** delete POST /api/comment/status */
export async function deleteUsingPOST2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingPOST2Params,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject_>('/api/comment/status', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** comment POST /api/comment/submit */
export async function commentUsingPOST(body: API.CommonReq, options?: { [key: string]: any }) {
  return request<API.ResultObject_>('/api/comment/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
