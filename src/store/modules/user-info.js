const state = () => {
  return {
    uid: '',
    userName: '',
    role: ''
  }
}

const actions = {
  setUserInfo ({ commit }, userInfo) {
    commit('setUserInfo', userInfo)
  },
  clearUserInfo ({ commit }) {
    commit('clearUserInfo')
  }
}

const mutations = {
  setUserInfo (state, payload) {
    ({
      uid: state.uid,
      userName: state.userName,
      role: state.role
    } = payload)
  },
  clearUserInfo (state, payload) {
    ({
      uid: state.uid,
      userName: state.userName,
      role: state.role
    } = {})
  }
}

const getters = {
  getUserInfo: state => {
    return state
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
