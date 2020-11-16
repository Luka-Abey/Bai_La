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
  
  async addPost({ commit }, obj) {
    const response = await axios.post(`${url}posts`, obj)
      .then(this.newPost = '')
      .catch(err => console.log(err)
      );
      console.log(response.data)
      
      commit('newPost', response.data);
  },

  async deletePost({ commit }, id){
    await axios.delete(`${url}posts/${id}`);

    commit('removePost', id);
  }
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  newPost: (state, post) => (state.posts.unshift(post)),
  removePost: (state, id) => (console.log(state), state.posts = state.posts.filter(post => post.id !== id))
};

export default {
  state,
  getters,
  actions,
  mutations
}