/** @format */

import { CommentsVO } from '@MetaAdsManager/backend-api/src/request/data-contracts';

export interface IGoodsComment extends CommentsVO {
    /**
     * 格式化后的评论图片
     */
    commentImgs: string[];
    /**
     * 格式化后的用户追评图片
     */
    addCommentImgs: string[];

    /** 回复追评字段 */
    addReplyContent?: string;
}
