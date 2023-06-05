// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import {API} from "@/services/knos/typings";


/** saveCategory POST /api/tag/add */
export async function addTag(body: API.Tag, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/tag/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveCategory POST /api/category/update */
export async function updateTag(body: API.Tag, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/tag/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
/** search POST /api/tag/search */
export async function queryTag(
  body: API.PageReqTag & API.PageBaseReq,
  options?: { [key: string]: any }
) {
  return request<API.PageResult<API.PageRes<API.Tag[]>>>('/api/tag/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}

/** delete POST /api/tag/delete */
export async function deleteTag(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeleteReq,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject_>('/api/tag/delete', {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}


/** searchWithHot GET /api/tag/hot */
export async function searchWithHotUsingGET1(
  body: API.PageReqTag,
  options?: { [key: string]: any },
) {
  return request<API.TagCountDto[]>('/api/tag/hot', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listPublishedPostsForTag GET /api/tag/${param0} */
export async function listPublishedPostsForTagUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listPublishedPostsForTagUsingGETParams,
  options?: { [key: string]: any },
) {
  const { tag: param0, ...queryParams } = params;
  return request<API.BlogListRes>(`/api/tag/${param0}`, {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // pageSize has a default value: 1
      pageSize: '1',
      ...queryParams,
    },
    ...(options || {}),
  });
}
