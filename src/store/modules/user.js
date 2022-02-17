import { getToken, setToken, removeToken } from "../../utils/auth";
import {auth} from "../../api/user";

const state = () => ({
  nickname: getToken(),
  token: "",
  nickname: "",
  roles: [],
});

const getters = {
  nickNameFirstWord: (state) => {
    return state.nickname;
  },
};

const actions = {
  login({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      auth(username.trim(), password)
        .then((res) => {
          const { data } = res;
          commit("SET_TOKEN", "token");
          setToken("token");
          resolve();
        })
        .catch((res) => {
          commit("SET_TOKEN", "token");
          setToken("token");
          reject(res);
        });
    });
  },
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NICKNAME: (state, nickname) => {
    state.nickname = nickname;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
