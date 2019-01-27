import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

const state = { 

}

const mutations = {
    // getHighqualityAll(state){
    //     Axios.get('http://localhost:3000/top/playlist/highquality?before='+state.before+'&limit=20')
    //     .then((res) => {
    //         // console.log(res.data);
    //         state.highqualityAll = res.data;
    //         console.log(state.highqualityAll)
    //     })
    // }
}

const actions = {
    // getHighqualityAll(context){
    //     context.commit('getHighqualityAll');
    // }
}

const getters = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})