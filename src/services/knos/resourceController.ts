// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {API} from "@/services/knos/typings";
import {SortOrder} from "antd/lib/table/interface";

/** add POST /api/resource/add */
export async function addUsingPOST(body: API.MenuItem, options?: { [key: string]: any }) {
  return request<API.Result<any>>('/api/resource/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteMenu POST /api/resource/delete */
export async function deleteMenuUsingPOST(body: API.DeleteReq, options?: { [key: string]: any }) {
  return request<API.ResultObject_>('/api/resource/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryMenu POST /api/resource/query */
export async function queryMenu(body: API.MenuQueryReq & API.PageBaseReq, sorter?: Record<string, SortOrder>, filter?: Record<string, any>, options?: { [key: string]: any }) {
  return request<API.PageVoMenuQueryRes>('/api/resource/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {...body, sorter: sorter ? sorter : {'id': 'desc'}, filter},
    ...(options || {}),
  }).then(res => res.data);
}

/** updateMenu POST /api/resource/update */
export async function updateMenuUsingPOST(body: API.MenuAddReq, options?: { [key: string]: any }) {
  return request<API.ResultObject_>('/api/resource/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
