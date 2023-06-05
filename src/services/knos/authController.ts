// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import {API} from "@/services/knos/typings";

/** captcha GET /api/auth/captcha/base64 */
export async function captchaUsingGET(options?: { [key: string]: any }) {
  return request<API.Result<API.CaptchaVo>>('/api/auth/captcha/base64', {
    method: 'GET',
    ...(options || {}),
  });
}

/** ${AuthController.login} POST /api/auth/login */
export async function loginUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.loginUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.Result<API.LoginResult>>('/api/auth/login', {
    method: 'POST',
    data: {
      ...params,
    },
    ...(options || {}),
  });
}

/** register POST /api/auth/register */
export async function registerUsingPOST(
  body: API.UserRegisterReq,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** registerToken POST /api/auth/register/token/${param0} */
export async function registerTokenUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.registerTokenUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { token: param0, ...queryParams } = params;
  return request<string>(`/api/auth/register/token/${param0}`, {
    method: 'POST',
    data: { ...queryParams },
    ...(options || {}),
  });
}
