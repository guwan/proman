// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {API} from "@/services/knos/typings";

/** delete POST /api/category/delete */
export async function deleteCategory(body: API.DeleteReq, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/category/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** searchWithHot GET /api/category/hot */
export async function searchWithHotUsingGET(
  body: API.PageReqCategory,
  options?: { [key: string]: any },
) {
  return request<API.CategoryCountDto[]>('/api/category/hot', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveCategory POST /api/category/add */
export async function addCategory(body: API.Category, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/category/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** saveCategory POST /api/category/update */
export async function updateCategory(body: API.Category, options?: { [key: string]: any }) {
  return request<API.ResultObject>('/api/category/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** search POST /api/category/search */
export async function queryCategory(
  body: API.PageReqCategory & API.PageBaseReq,
  options?: { [key: string]: any },
) {
  return request<API.PageResult<API.PageRes<API.Category[]>>>('/api/category/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}

/** listPublishedPostsForCategory GET /api/category/${param0} */
export async function listPublishedPostsForCategoryUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listPublishedPostsForCategoryUsingGETParams,
  options?: { [key: string]: any },
) {
  const {category: param0, ...queryParams} = params;
  return request<API.BlogListRes>(`/api/category/${param0}`, {
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
