import {request} from "@@/plugin-request/request";
import {API} from "@/services/knos/typings";

/** registerToken POST /api/auth/register/token/${param0} */
export async function uploadFile(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: FormData,
  options?: { [key: string]: any },
) {
  return request<API.Result<string>>(`/api/file/upload`, {
    method: 'POST',
    requestType: 'form',
    data: params,
    ...(options || {}),
  });
}

/** registerToken POST /api/auth/register/token/${param0} */
export async function uploadReturnInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: FormData,
  options?: { [key: string]: any },
) {
  return request<API.Result<API.Attach>>(`/api/file/uploadReturnInfo`, {
    method: 'POST',
    requestType: 'form',
    data: params,
    ...(options || {}),
  });
}
/** registerToken POST /api/file/add */
export async function addFiles(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: FormData,
  options?: { [key: string]: any },
) {
  return request<API.Result<string[]>>(`/api/file/add`, {
    method: 'POST',
    requestType: 'form',
    data: params,
    ...(options || {}),
  });
}


/** delete POST /api/attach/delete */
export async function deleteFile(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeleteReq,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject_>('/api/file/delete', {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}

/** search POST /api/attach/query */
export async function queryFile(
  body: API.PageReq<API.Attach> & API.PageBaseReq,
  options?: { [key: string]: any }
) {
  return request<API.PageResult<API.PageRes<API.Attach[]>>>('/api/file/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}
