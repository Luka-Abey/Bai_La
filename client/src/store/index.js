import Vuex from 'vuex';
import Vue from 'vue';
import posts from './modules/posts';
import users from './modules/users';
import VueMediaEmbed from 'vue-media-embed';


// Load Vuex
Vue.use(Vuex);

// Create store
const store = new Vuex.Store({
  modules: {
    posts,
    users
  }
});

Vue.use(VueMediaEmbed, { store })

export default store;