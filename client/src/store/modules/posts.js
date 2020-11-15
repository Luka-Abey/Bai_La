import axios from 'axios';

const url = 'http://localhost:5000/api/';

const state = {
  posts: []
};

const getters = {
  allPosts: (state) => state.posts
};

const actions = {
  async fetchPosts({ commit }) {
    const response = await axios.get(`${url}posts`)
    .then(res => this.posts = res.data)
    .catch(err => console.log(err)
    );
    commit('setPosts', response.data);
  },
  
  async addPost({ commit }, data) {
    console.log(data)
    const response = await axios.post(`${url}posts`, {
        postBody: this.newPost,
        video: this.newVideo
      })
      .then(this.newPost = '')
      .catch(err => console.log(err));

      commit('newPost', response.data);
  }
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  newPost: (state, post) => (state.posts.unshift(post))
};

export default {
  state,
  getters,
  actions,
  mutations
}