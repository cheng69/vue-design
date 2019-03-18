import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//状态
const state={
  count:1
}
//改变状态的方法
const mutations={
  //可以加参数  state是默认的  不用传
  add(state,num){
    state.count+=num;
  },
  reduce(state){
    state.count--;
  }
}
//过滤
const getters={
  count:function (state) {
    return state.count+=100;
  }
}
//异步修改
const actions={
  addAction(context){
    context.commit('add',10)
    setTimeout(()=>{context.commit('reduce')},3000)
    console.log('我比reduce先执行')
  },
  reduceAction({commit}){
    commit('reduce');
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})