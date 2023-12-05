import request from '@/utils/request'
// 获取搜索列表的产品信息
export const getProList = (obj) => {
  const { categoryId, goodsName, page } = obj
  return request.get('/goods/list', {
    params: {
      categoryId,
      goodsName,
      page
    }
  })
}

// 获取商品详情页的信息
export const getProDetail = (goodsId) => {
  return request.get('/goods/detail', {
    params: {
      goodsId: goodsId
    }
  })
}

// 获取评论列表
export const getProComments = (goodsId, limit) => {
  return request.get('/comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}
