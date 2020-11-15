import axios from 'axios';

const state = {
  posts: []
};

const getters = {
  allPosts: (state) => state.posts
};

const actions = {
  async fetchPosts({ commit }) {
    const respone = await axios.get(`${url}posts`)
    .then(res => this.posts = res.data)
    .catch(err => console.log(err));
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
}