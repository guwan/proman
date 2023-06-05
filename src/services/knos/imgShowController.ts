// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {API} from "@/services/knos/typings";


/** saveCategory POST /api/imgShow/add */
export async function addImgShow(body: API.ImgShow, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/imgShow/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete POST /api/imgShow/delete */
export async function deleteImgShow(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeleteReq,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject_>('/api/imgShow/delete', {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}

/** saveCategory POST /api/category/update */
export async function updateImgShow(body: API.ImgShow, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/imgShow/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** search POST /api/imgShow/query */
export async function queryImgShow(
  body: API.PageReq<API.ImgShow> & API.PageBaseReq,
  options?: { [key: string]: any }
) {
  return request<API.PageResult<API.PageRes<API.ImgShow[]>>>('/api/imgShow/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}

/** search POST /api/imgShow/queryByType */
export async function queryByType(
  body: API.ImgShow & API.PageBaseReq,
  options?: { [key: string]: any }
) {
  return request<API.Result<API.ImgShowPage>>('/api/imgShow/queryByType', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}

/** search POST /api/imgShow/queryMap */
export async function queryMap(
  options?: { [key: string]: any }
) {
  return request<API.Result<API.HospitalMap>>('/api/imgShow/queryMap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  }).then(res => res.data as API.HospitalMap);
}
