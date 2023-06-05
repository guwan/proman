// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** create POST /api/page */
export async function createUsingPOST(body: API.SitePageForm, options?: { [key: string]: any }) {
  return request<API.ResultObject_>('/api/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** list GET /api/page/list */
export async function listUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.PageVoSitePageVo_>('/api/page/list', {
    method: 'GET',
    params: {
      // pageReq has a default value: 1
      pageReq: '1',
      ...params,
    },
    ...(options || {}),
  });
}

/** get GET /api/page/${param0}${param1} */
export async function getUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, slug: param1, ...queryParams } = params;
  return request<API.SitePage>(`/api/page/${param0}${param1}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** delete GET /api/page/${param0}${param1}/delete */
export async function deleteUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, slug: param1, ...queryParams } = params;
  return request<API.ResultObject_>(`/api/page/${param0}${param1}/delete`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** delete PUT /api/page/${param0}${param1}/delete */
export async function deleteUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingPUTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, slug: param1, ...queryParams } = params;
  return request<API.ResultObject_>(`/api/page/${param0}${param1}/delete`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** delete POST /api/page/${param0}${param1}/delete */
export async function deleteUsingPOST4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingPOST4Params,
  options?: { [key: string]: any },
) {
  const { id: param0, slug: param1, ...queryParams } = params;
  return request<API.ResultObject_>(`/api/page/${param0}${param1}/delete`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** delete DELETE /api/page/${param0}${param1}/delete */
export async function deleteUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, slug: param1, ...queryParams } = params;
  return request<API.ResultObject_>(`/api/page/${param0}${param1}/delete`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** delete PATCH /api/page/${param0}${param1}/delete */
export async function deleteUsingPATCH(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingPATCHParams,
  options?: { [key: string]: any },
) {
  const { id: param0, slug: param1, ...queryParams } = params;
  return request<API.ResultObject_>(`/api/page/${param0}${param1}/delete`, {
    method: 'PATCH',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** update POST /api/page/${param0}${param1}/edit */
export async function updateUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateUsingPOST1Params,
  body: API.SitePageForm,
  options?: { [key: string]: any },
) {
  const { id: param0, slug: param1, ...queryParams } = params;
  return request<API.ResultObject_>(`/api/page/${param0}${param1}/edit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
