import apiTasks from '@/api/tasks'

// initial state
const state = () => ({
  all: []
})

// getters
const getters = {
  getAllTasks (state) { return state.all }

}

// actions
const actions = {
  async readAllTasks ({ commit }) {
    const tasks = await apiTasks.getTasks()
    commit('setTasks', tasks)
  }
}

// mutations
const mutations = {
  setTasks (state, tasks) {
    state.all = tasks
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
