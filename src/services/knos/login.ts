// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 发送手机验证码 POST /api/login/captcha */
export async function getMobileCaptcha(
  params: {
    // query
    /** 手机号 */
    phone?: string;
    /** 图形验证码 */
    captcha?: string;
    /** 图形验证码的key */
    captchaKey?: string;
  },
  options?: { [key: string]: any },
) {
  return request<AntAPI.FakeCaptcha>('/auth/mobileCaptcha', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
