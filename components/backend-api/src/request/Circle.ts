/* eslint-disable object-shorthand */
/* eslint-disable max-lines */
/* eslint-disable id-length */

import {
  CircleV1ConsoleInformationclassifyPageGetParams,
  CircleV1ConsoleInformationPageGetParams,
  CircleV1ConsolePostsAuditGetParams,
  CircleV1ConsolePostsPageGetParams,
  CircleV1WebCommentListRepliesGetParams,
  CircleV1WebCommentTopListGetParams,
  CircleV1WebInformationCollectGetParams,
  CircleV1WebInformationMyCommentsGetParams,
  CircleV1WebPostsMyGetParams,
  CircleV1WebPostsQueryGetParams,
  CommentDTO,
  CommentResponseDTO,
  InformationClassifyRequestDTO,
  InformationCollectDTO,
  InformationRequestDTO,
  JsonResultInformationClassifyResponseDTO,
  JsonResultInformationResponseDTO,
  JsonResultListInformationClassifyResponseDTO,
  JsonResultListPostsClassifyResponseDTO,
  JsonResultLong,
  JsonResultObject,
  JsonResultPageInfoCommentResponseDTO,
  JsonResultPageInfoInformationClassifyResponseDTO,
  JsonResultPageInfoInformationResponseDTO,
  JsonResultPageInfoPostsResponseDTO,
  JsonResultPostsClassifyResponseDTO,
  JsonResultPostsResponseDTO,
  JsonResultVoid,
  LikeOperateDTO,
  Object,
  PostsAuditDTO,
  PostsClassifyRequestDTO,
  PostsClassifyStatusDTO,
  PostsRequestDTO,
  PostsStatusDTO
} from "./data-contracts";

import { IRequestConfig } from "@MetaAdsManager/request/src/types/fetch-type";
import requestInstance from "./instance";

type RequestConfig = Omit<IRequestConfig, "url" | "method">;

export const API = {
  /**
   * No description
   * @name POST /circle/v1/web/comment/create
   * @summary 发表评论
   * @tags 社区/移动端-评论
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/comment/create_POST": (body: CommentDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/comment/create`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /circle/v1/web/comment/like
   * @summary 评论点赞
   * @tags 社区/移动端-评论
   * @response `200` `JsonResultObject` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/comment/like_POST": (body: LikeOperateDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/comment/like`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /circle/v1/web/comment/listReplies
   * @summary 楼层回复列表
   * @tags 社区/移动端-评论
   * @response `200` `JsonResultPageInfoCommentResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/comment/listReplies_GET": (
    query: CircleV1WebCommentListRepliesGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/circle/v1/web/comment/listReplies`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoCommentResponseDTO>,
  /**
   * No description
   * @name GET /circle/v1/web/comment/topList
   * @summary 顶层评论列表
   * @tags 社区/移动端-评论
   * @response `200` `JsonResultPageInfoCommentResponseDTO` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/comment/topList_GET": (query: CircleV1WebCommentTopListGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/comment/topList`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoCommentResponseDTO>,
  /**
   * No description
   * @name DELETE /circle/v1/console/information/del/{id}
   * @summary 逻辑删除
   * @tags 社区/后台-咨询
   * @response `200` `JsonResultObject` OK |  `204` `Object` No Content |  `401` `Object` Unauthorized |  `403` `Object` Forbidden
   */
  "/circle/v1/console/information/del/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/information/del/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name PUT /circle/v1/console/information/update
   * @summary 修改对象
   * @tags 社区/后台-咨询
   * @response `200` `JsonResultObject` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/information/update_PUT": (body: InformationRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/information/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /circle/v1/console/information/{id}
   * @summary 详细信息
   * @tags 社区/后台-咨询
   * @response `200` `JsonResultInformationResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/information/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/information/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultInformationResponseDTO>,
  /**
   * No description
   * @name GET /circle/v1/console/information/page
   * @summary 分页查询
   * @tags 社区/后台-咨询
   * @response `200` `JsonResultPageInfoInformationResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/information/page_GET": (
    query: CircleV1ConsoleInformationPageGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/circle/v1/console/information/page`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoInformationResponseDTO>,
  /**
   * No description
   * @name POST /circle/v1/console/information/save
   * @summary 保存对象
   * @tags 社区/后台-咨询
   * @response `200` `JsonResultObject` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/information/save_POST": (body: InformationRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/information/save`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name DELETE /circle/v1/console/informationclassify/del/{id}
   * @summary 逻辑删除
   * @tags 社区/后台-咨询分类
   * @response `200` `JsonResultObject` OK |  `204` `Object` No Content |  `401` `Object` Unauthorized |  `403` `Object` Forbidden
   */
  "/circle/v1/console/informationclassify/del/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/informationclassify/del/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /circle/v1/console/informationclassify/list
   * @summary 查询全部
   * @tags 社区/后台-咨询分类
   * @response `200` `JsonResultListInformationClassifyResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/informationclassify/list_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/informationclassify/list`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListInformationClassifyResponseDTO>,
  /**
   * No description
   * @name GET /circle/v1/console/informationclassify/{id}
   * @summary 详细信息
   * @tags 社区/后台-咨询分类
   * @response `200` `JsonResultInformationClassifyResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/informationclassify/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/informationclassify/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultInformationClassifyResponseDTO>,
  /**
   * No description
   * @name GET /circle/v1/console/informationclassify/page
   * @summary 分页查询
   * @tags 社区/后台-咨询分类
   * @response `200` `JsonResultPageInfoInformationClassifyResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/informationclassify/page_GET": (
    query: CircleV1ConsoleInformationclassifyPageGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/circle/v1/console/informationclassify/page`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoInformationClassifyResponseDTO>,
  /**
   * No description
   * @name POST /circle/v1/console/informationclassify/save
   * @summary 保存对象
   * @tags 社区/后台-咨询分类
   * @response `200` `JsonResultObject` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/informationclassify/save_POST": (
    body: InformationClassifyRequestDTO,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/circle/v1/console/informationclassify/save`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name PUT /circle/v1/console/informationclassify/update
   * @summary 修改对象
   * @tags 社区/后台-咨询分类
   * @response `200` `JsonResultObject` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/informationclassify/update_PUT": (
    body: InformationClassifyRequestDTO,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/circle/v1/console/informationclassify/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name PUT /circle/v1/console/posts/audit
   * @summary 帖子审核
   * @tags 社区/后台-帖子
   * @response `200` `JsonResultObject` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/posts/audit_PUT": (body: PostsAuditDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/posts/audit`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /circle/v1/console/posts/audit
   * @summary 审核记录
   * @tags 社区/后台-帖子
   * @response `200` `Object` 成功
   */
  "/circle/v1/console/posts/audit_GET": (query: CircleV1ConsolePostsAuditGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/posts/audit`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<Object>,
  /**
   * No description
   * @name DELETE /circle/v1/console/posts/del/{id}
   * @summary 逻辑删除
   * @tags 社区/后台-帖子
   * @response `200` `JsonResultObject` OK |  `204` `Object` No Content |  `401` `Object` Unauthorized |  `403` `Object` Forbidden
   */
  "/circle/v1/console/posts/del/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/posts/del/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name POST /circle/v1/console/posts/save
   * @summary 保存对象
   * @tags 社区/后台-帖子
   * @response `200` `JsonResultObject` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/posts/save_POST": (body: PostsRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/posts/save`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name PUT /circle/v1/console/posts/top
   * @summary 设置置顶
   * @tags 社区/后台-帖子
   * @response `200` `JsonResultObject` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/posts/top_PUT": (body: PostsStatusDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/posts/top`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name PUT /circle/v1/console/posts/status
   * @summary 设置状态
   * @tags 社区/后台-帖子
   * @response `200` `JsonResultObject` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/posts/status_PUT": (body: PostsRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/posts/status`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /circle/v1/console/posts/{id}
   * @summary 详细信息
   * @tags 社区/后台-帖子
   * @response `200` `JsonResultPostsResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/posts/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/posts/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultPostsResponseDTO>,
  /**
   * No description
   * @name GET /circle/v1/console/posts/page
   * @summary 分页查询
   * @tags 社区/后台-帖子
   * @response `200` `JsonResultPageInfoPostsResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/posts/page_GET": (query: CircleV1ConsolePostsPageGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/posts/page`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoPostsResponseDTO>,
  /**
   * No description
   * @name DELETE /circle/v1/console/postsclassify/delete/{id}
   * @summary 删除
   * @tags 社区/后台-帖子分类
   * @response `200` `JsonResultObject` OK |  `204` `Object` No Content |  `401` `Object` Unauthorized |  `403` `Object` Forbidden
   */
  "/circle/v1/console/postsclassify/delete/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/postsclassify/delete/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /circle/v1/console/postsclassify/list
   * @summary 分页查询
   * @tags 社区/后台-帖子分类
   * @response `200` `JsonResultListPostsClassifyResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/postsclassify/list_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/postsclassify/list`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListPostsClassifyResponseDTO>,
  /**
   * No description
   * @name GET /circle/v1/console/postsclassify/{id}
   * @summary 详细信息
   * @tags 社区/后台-帖子分类
   * @response `200` `JsonResultPostsClassifyResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/postsclassify/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/postsclassify/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultPostsClassifyResponseDTO>,
  /**
   * No description
   * @name POST /circle/v1/console/postsclassify/save
   * @summary 保存对象
   * @tags 社区/后台-帖子分类
   * @response `200` `JsonResultObject` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/postsclassify/save_POST": (body: PostsClassifyRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/postsclassify/save`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name PUT /circle/v1/console/postsclassify/status
   * @summary 修改状态
   * @tags 社区/后台-帖子分类
   * @response `200` `JsonResultObject` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/postsclassify/status_PUT": (body: PostsClassifyStatusDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/postsclassify/status`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /circle/v1/console/postsclassify/tree
   * @summary 查询全部帖子分类
   * @tags 社区/后台-帖子分类
   * @response `200` `JsonResultListPostsClassifyResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/postsclassify/tree_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/postsclassify/tree`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListPostsClassifyResponseDTO>,
  /**
   * No description
   * @name PUT /circle/v1/console/postsclassify/update
   * @summary 修改对象
   * @tags 社区/后台-帖子分类
   * @response `200` `JsonResultObject` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/postsclassify/update_PUT": (body: PostsClassifyRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/postsclassify/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /circle/v1/web/information/classify
   * @summary 查询全部分类
   * @tags 社区/移动端-咨询
   * @response `200` `JsonResultListInformationClassifyResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/information/classify_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/information/classify`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListInformationClassifyResponseDTO>,
  /**
   * No description
   * @name GET /circle/v1/web/information/collect
   * @summary 收藏咨询列表
   * @tags 社区/移动端-咨询
   * @response `200` `JsonResultObject` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/information/collect_GET": (
    query: CircleV1WebInformationCollectGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/circle/v1/web/information/collect`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name POST /circle/v1/web/information/collect
   * @summary 资讯收藏
   * @tags 社区/移动端-咨询
   * @response `200` `JsonResultObject` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/information/collect_POST": (body: InformationCollectDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/information/collect`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /circle/v1/web/information/detail/{id}
   * @summary 咨询详情
   * @tags 社区/移动端-咨询
   * @response `200` `JsonResultObject` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/information/detail/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/information/detail/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name POST /circle/v1/web/information/like
   * @summary 点赞
   * @tags 社区/移动端-咨询
   * @response `200` `JsonResultObject` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/information/like_POST": (body: LikeOperateDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/information/like`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name POST /circle/v1/web/information/page
   * @summary 分页查询资讯
   * @tags 社区/移动端-咨询
   * @response `200` `JsonResultObject` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/information/page_POST": (body: Object, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/information/page`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /circle/v1/web/posts/classify
   * @summary 查询全部帖子分类
   * @tags 社区/移动端-帖子
   * @response `200` `JsonResultListPostsClassifyResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/posts/classify_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/posts/classify`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListPostsClassifyResponseDTO>,
  /**
   * No description
   * @name POST /circle/v1/web/posts/like
   * @summary 帖子点赞
   * @tags 社区/移动端-帖子
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/posts/like_POST": (body: LikeOperateDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/posts/like`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /circle/v1/web/posts/my
   * @summary 我的文章
   * @tags 社区/移动端-帖子
   * @response `200` `JsonResultPageInfoPostsResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/posts/my_GET": (query: CircleV1WebPostsMyGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/posts/my`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoPostsResponseDTO>,
  /**
   * No description
   * @name GET /circle/v1/web/posts/query
   * @summary 查询帖子列表
   * @tags 社区/移动端-帖子
   * @response `200` `JsonResultPageInfoPostsResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/posts/query_GET": (query: CircleV1WebPostsQueryGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/posts/query`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoPostsResponseDTO>,
  /**
   * No description
   * @name PUT /circle/v1/web/posts/repost
   * @summary 重新发布
   * @tags 社区/移动端-帖子
   * @response `200` `JsonResultVoid` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/posts/repost_PUT": (body: PostsRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/posts/repost`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /circle/v1/web/posts/{id}
   * @summary 详细信息
   * @tags 社区/移动端-帖子
   * @response `200` `JsonResultPostsResponseDTO` OK |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/posts/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/posts/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultPostsResponseDTO>,
  /**
   * No description
   * @name DELETE /circle/v1/web/posts/{id}
   * @summary 删除文章
   * @tags 社区/移动端-帖子
   * @response `200` `JsonResultVoid` OK |  `204` `Object` No Content |  `401` `Object` Unauthorized |  `403` `Object` Forbidden
   */
  "/circle/v1/web/posts/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/posts/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /circle/v1/web/posts/save
   * @summary 发布帖子
   * @tags 社区/移动端-帖子
   * @response `200` `JsonResultLong` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/web/posts/save_POST": (body: PostsRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/posts/save`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name PUT /circle/v1/console/postsclassify/move
   * @summary 移动分类
   * @response `200` `Object` 成功
   */
  "/circle/v1/console/postsclassify/move_PUT": (
    body: { id: number; pid: number; sort: number },
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/circle/v1/console/postsclassify/move`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<Object>,
  /**
   * No description
   * @name DELETE /circle/v1/web/comment/{id}
   * @summary 删除咨询评论
   * @tags 社区/移动端-咨询
   * @response `200` `Object` 成功
   */
  "/circle/v1/web/comment/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/comment/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<Object>,
  /**
   * No description
   * @name GET /circle/v1/web/comment/{id}
   * @summary 评论获取
   * @tags 社区/移动端-评论
   * @response `200` `{ content: string, dataId: number, floorId?: number, id?: number, likeCnt?: number, likeStatus?: boolean, mentionCommentId?: number, mentionNickName?: string, mentionPublisherId: number, publishTime: string, publisherHeadImg?: string, publisherNickName?: string, replyCnt?: number, subComments: (CommentResponseDTO)[], type: number }` 成功
   */
  "/circle/v1/web/comment/{id}_GET": (id: string, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/web/comment/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<{
      content: string;
      dataId: number;
      floorId?: number;
      id?: number;
      likeCnt?: number;
      likeStatus?: boolean;
      mentionCommentId?: number;
      mentionNickName?: string;
      mentionPublisherId: number;
      publishTime: string;
      publisherHeadImg?: string;
      publisherNickName?: string;
      replyCnt?: number;
      subComments: CommentResponseDTO[];
      type: number;
    }>,
  /**
   * No description
   * @name PUT /circle/v1/console/posts/update
   * @summary 修改对象
   * @tags 社区/后台-帖子
   * @response `200` `JsonResultObject` OK |  `201` `Object` Created |  `401` `Object` Unauthorized |  `403` `Object` Forbidden |  `404` `Object` Not Found
   */
  "/circle/v1/console/posts/update_PUT": (body: PostsRequestDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/circle/v1/console/posts/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name GET /circle/v1/web/information/myComments
   * @summary 我对咨询的评论
   * @tags 社区/移动端-咨询
   * @response `200` `{ code: number, msg: string, data: { pageNum: number, pageSize: number, size: number, startRow: number, endRow: number, total: number, pages: number, list: ({ informationId?: number, title?: string, commentId?: number, content?: string, publishTime?: string })[], prePage: number, nextPage: number, isFirstPage: boolean, isLastPage: boolean, hasPreviousPage: boolean, hasNextPage: boolean, navigatePages: number, navigatepageNums: (number)[], navigateFirstPage: number, navigateLastPage: number, firstPage: number, lastPage: number } }` 成功
   */
  "/circle/v1/web/information/myComments_GET": (
    query: CircleV1WebInformationMyCommentsGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/circle/v1/web/information/myComments`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<{
      code: number;
      msg: string;
      data: {
        pageNum: number;
        pageSize: number;
        size: number;
        startRow: number;
        endRow: number;
        total: number;
        pages: number;
        list: { informationId?: number; title?: string; commentId?: number; content?: string; publishTime?: string }[];
        prePage: number;
        nextPage: number;
        isFirstPage: boolean;
        isLastPage: boolean;
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        navigatePages: number;
        navigatepageNums: number[];
        navigateFirstPage: number;
        navigateLastPage: number;
        firstPage: number;
        lastPage: number;
      };
    }>
};
