import type {API} from "@/services/knos/typings";
import {request} from "@@/plugin-request/request";

/** search POST /api/outSchedule/query */
export async function query(
  body: API.OutScheduleReq & API.PageBaseReq,
  options?: { [key: string]: any }
) {
  return request<API.Result_<API.OutSch>>('/api/outSchedule/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
