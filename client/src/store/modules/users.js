import axios from 'axios';
const url = 'http://localhost:5000/api/';

const state = {
  user: null
};

const getters = {
  isAuthenticated: state => !!state.user,    
  StatePosts: state => state.posts,
  StateUser: state => state.user,
};

const actions = {
  async getUser({ commit }, id) {
    const response = await axios.get(
      `${url}users/signup${id}`
    );

    commit('getUser', response.data);
  },

  async createUser({ commit }, user) {
    const response = await axios.post(
      `${url}users/signup`, user
    );

    commit('newUser', response.data);
  },

  async loginUser({ commit }, user) {
    const response = await axios.post(
      `${url}users/login`, user
    );
    commit('loggedIn', response.data)
  },


  async deletePost({ commit }, id) {
    await axios.delete(`${url}posts/${id}`);

    commit('removePost', id);
  },

  async updateUser({ commit }, updatePost) {
    const response = await axios.put(
      `${url}posts/${updatePost.id}`,
      updatePost
    );

    commit('updatePost', response.data);
  }
};

const mutations = {
  // setPosts: (state, user) => (state.user = user),
  newUser: (state, user) => state.user = user,
  removePost: (state, id) =>
    (state.posts = state.posts.filter(post => post._id !== id)),
  updatePost: (state, updatePost) => {
    const index = state.posts.findIndex(post => post.id === updatePost.id);
    if (index !== -1) {
      state.posts.splice(index, 1, updatePost);
    }
  },
  loggedIn: (state, username) => {
    state.user = username
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
