// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {API} from "@/services/knos/typings";


/** saveCategory POST /api/expert/add */
export async function addExpert(body: API.Expert, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/expert/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete POST /api/expert/delete */
export async function deleteExpert(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeleteReq,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject_>('/api/expert/delete', {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}

/** saveCategory POST /api/category/update */
export async function updateExpert(body: API.Expert, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/expert/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** search POST /api/expert/query */
export async function queryExpert(
  body: API.PageReq<API.Expert> & API.PageBaseReq,
  options?: { [key: string]: any }
) {
  return request<API.PageResult<API.PageRes<API.Expert[]>>>('/api/expert/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}

/** search POST /api/expert/queryLeadership */
export async function queryLeadership(
  body: API.PageReq<API.Depart> & API.PageBaseReq,
  options?: { [key: string]: any }
) {
  return request<API.Result_<API.ExpertPage>>('/api/expert/queryLeadership', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}


/** search POST /api/expert/query */
export async function viewDetails(
  body: API.Expert,
  options?: { [key: string]: any }
) {
  return request<API.PageResult<API.ExpertDetail>>('/api/expert/viewDetails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

