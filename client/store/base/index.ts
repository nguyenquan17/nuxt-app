import { Module } from 'vuex'
import actions from './actions'
import mutations from './mutations'


const state: any = {}
const baseStore: Module<any, any>={
  namespaced: true,
  state,
  actions,
  mutations
}

export default baseStore
