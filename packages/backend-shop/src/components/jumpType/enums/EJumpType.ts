/**
 * 链接跳转类型
 *
 * @format
 */

export enum EJumpType {
    /** 不跳转 */
    None = 0,
    /** 功能页面 */
    SystemPage = 1,
    /** 商品分类 */
    GoodCate = 2,
    /** 商品分组 */
    GoodsGroup = 3,
    /** 商品详情 */
    GoodDetail = 4,
    /** 酒店详情 */
    Hotel = 5,
    /** 装修页面 */
    DecorationPage = 6,
    // /** 自定义链接 */
    // CustomLink = 7,
    // /** 直播页面 */
    LivePage = 8,
    /** H5链接 */
    H5Link = 9
}

/** 描述数据 */
export const MJumpType = {
    [EJumpType.SystemPage]: '功能页面',
    [EJumpType.GoodCate]: '商品分类',
    [EJumpType.GoodsGroup]: '商品分组',
    [EJumpType.GoodDetail]: '商品详情',
    [EJumpType.LivePage]: '直播链接',
    [EJumpType.DecorationPage]: '装修页面',
    // [EJumpType.CustomLink]: '自定义链接',
    [EJumpType.H5Link]: 'H5链接',
    [EJumpType.Hotel]: '酒店详情'
};
