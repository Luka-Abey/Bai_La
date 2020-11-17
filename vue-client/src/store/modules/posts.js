import axios from 'axios';
const url = 'http://localhost:5000/api/';

const state = {
  posts: []
};

const getters = {
  allPosts: state => state.posts
};

const actions = {
  async fetchPosts({ commit }) {
    const response = await axios.get(
      `${url}posts`
    );

    commit('setPosts', response.data);
  },
  async addPost({ commit }, post) {
    const response = await axios.post(
      `${url}posts`, post
    );

    commit('newPost', response.data);
  },
  async deletePost({ commit }, id) {
    await axios.delete(`${url}posts/${id}`);

    commit('removePost', id);
  },
  // async filterPosts({ commit }, e) {
  //   // Get selected number
  //   const limit = parseInt(
  //     e.target.options[e.target.options.selectedIndex].innerText
  //   );

  //   const response = await axios.get(
  //     `${url}posts?_limit=${limit}`
  //   );

  //   commit('setPosts', response.data);
  // },
  async updatePost({ commit }, updatePost) {
    const response = await axios.put(
      `${url}posts/${updatePost.id}`,
      updatePost
    );

    commit('updatePost', response.data);
  }
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  newPost: (state, post) => state.posts.unshift(post),
  removePost: (state, id) =>
    (state.posts = state.posts.filter(post => post._id !== id)),
  updatePost: (state, updatePost) => {
    const index = state.posts.findIndex(post => post.id === updatePost.id);
    if (index !== -1) {
      state.posts.splice(index, 1, updatePost);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
