// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {API} from "@/services/knos/typings";

/** queryUser POST /api/user/query */
export async function queryUser(body: API.UserQueryReq & API.PageBaseReq, options?: { [key: string]: any }) {
  return request<API.PageResult<API.PageVoUserQueryRes>>('/api/user/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}
/** add POST /api/user/add */
export async function addUser(body: API.UserAddReq, options?: { [key: string]: any }) {
  return request<API.ResultObject_>('/api/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** update POST /api/user/update */
export async function updateUser(body: API.UserUpdateReq, options?: { [key: string]: any }) {
  return request<API.Result<any>>('/api/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete POST /api/user/delete */
export async function deleteUser(body: API.DeleteReq, options?: { [key: string]: any }) {
  return request<API.ResultObject_>('/api/user/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** me GET /api/user/me */
export async function fetchMyInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params?: API.meUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.Result<API.Me>>('/api/user/me', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** myMenu GET /api/user/myMenu */
export async function fetchMyMenu(options?: { [key: string]: any }) {
  return request<API.Result<API.MenuRes[]>>('/api/user/myMenu', {
    method: 'GET',
    ...(options || {}),
  });
}


/** queryAllRole POST /api/user/queryAllRole */
export async function queryAllRole(options?: { [key: string]: any }) {
  return request<API.ResultAllTreeConfigRes>('/api/user/queryAllRole', {
    method: 'POST',
    ...(options || {}),
  });
}

/** queryUserRole POST /api/user/queryUserRole */
export async function queryUserRole(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUserRoleUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultSelectKeysRes_>('/api/user/queryUserRole', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** resetPassword POST /api/user/resetPassword */
export async function resetPasswordUsingPOST(
  body: API.PasswordUpdateReq,
  options?: { [key: string]: any },
) {
  return request<any>('/api/user/resetPassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}


/** updatePassword POST /api/user/updatePassword */
export async function updatePasswordUsingPOST(
  body: API.PasswordUpdateReq,
  options?: { [key: string]: any },
) {
  return request<any>('/api/user/updatePassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateUserRole POST /api/user/updateUserRole */
export async function updateUserRole(
  body: API.TreeDataUpdateReq,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject_>('/api/user/updateUserRole', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
