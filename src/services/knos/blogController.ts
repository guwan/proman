// @ts-ignore
/* eslint-disable */
import {request} from 'umi';
import {API} from "@/services/knos/typings";


/** createBlog POST /api/blog/new */
export async function addBlog(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createBlogReq,
  options?: { [key: string]: any },
) {
  return request<API.Result<any>>('/api/blog/new', {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}


/** deletePost POST /api/blog/delete */
export async function deleteBlog(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeleteReq,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject_>(`/api/blog/delete`, {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}

/** updateBlog POST /api/blog/${param0}${param1}/edit */
export async function updateBlog(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateBlogReq,
  options?: { [key: string]: any },
) {
  const {id: param0, slug: param1} = params;
  let blog: string | number | undefined = param0;
  if (!blog) {
    blog = param1;
  }
  return request<API.ResultObject_>(`/api/blog/${blog}/edit`, {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}


/** 后台查询接口 dashboard GET /api/blog/dashboard */
export async function queryBlog(body: API.BlogVo & API.PageBaseReq, options?: { [key: string]: any }) {
  return request<API.PageResult<API.PageRes<API.BlogVoForList[]>>>('/api/blog/queryBlog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}


/** dashboard GET /api/blog/queryBlogListPage */
export async function queryBlogListPage(body: API.BlogListPageReq & API.PageBaseReq, options?: { [key: string]: any }) {
  return request<API.PageResult<API.BlogListPageData>>('/api/blog/queryBlogListPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  }).then(res => res.data);
}

/** 主页查询接口 */
export async function viewBlog(body: API.BlogVo , options?: { [key: string]: any }) {
  return request<API.Result<API.BlogVo>>('/api/blog/viewBlog', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...body,
    },
    ...(options || {}),
  }).then(res => res.data);
}
