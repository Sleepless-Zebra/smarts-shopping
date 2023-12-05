import { getInfo, setInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      userInfo: getInfo()
    }
  },
  mutations: {
    setUserInfo (state, obj) {
      state.userInfo = obj
      setInfo(obj)
    }
  },
  actions: {
    loginOut (context) {
      context.commit('setUserInfo', {})
      context.commit('cart/setCartActions ', [], { root: true })
    }
  },
  getters: {}
}
