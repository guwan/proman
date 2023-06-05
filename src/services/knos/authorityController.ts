// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import {API} from "@/services/knos/typings";

/** add POST /api/role/add */
export async function addRole(body: API.RoleAddReq, options?: { [key: string]: any }) {
  return request<API.ResultObject_>('/api/role/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete POST /api/role/delete */
export async function deleteRole(body: API.DeleteReq, options?: { [key: string]: any }) {
  return request<API.ResultObject_>('/api/role/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** query POST /api/role/query */
export async function queryRole(body: API.RoleQueryReq & API.PageBaseReq, options?: { [key: string]: any }) {
  return request<API.PageVoRoleQueryRes_>('/api/role/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}

/** queryRoleMenu POST /api/role/queryAllMenu */
export async function queryAllMenu(options?: { [key: string]: any }) {
  return request<API.ResultAllTreeConfigRes>('/api/role/queryAllMenu', {
    method: 'POST',
    ...(options || {}),
  });
}

/** queryRoleMenu POST /api/role/queryRoleMenu */
export async function queryRoleMenu(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.idReq,
  options?: { [key: string]: any },
) {
  return request<API.Result<API.SelectKeysRes>>('/api/role/queryRoleMenu', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** update POST /api/role/update */
export async function updateRole(body: API.RoleAddReq, options?: { [key: string]: any }) {
  return request<API.ResultObject_>('/api/role/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateRoleMenu POST /api/role/updateRoleMenu */
export async function updateRoleMenu(
  body: API.TreeDataUpdateReq,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject_>('/api/role/updateRoleMenu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
