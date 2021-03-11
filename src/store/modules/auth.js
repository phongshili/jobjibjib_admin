import axios from "axios";

const state = {
  accessToken: localStorage.getItem("accessToken") || null,
};
const getters = {
  getToken: (state) => state.accessToken,
  isAuth: (state) => state.accessToken !== null,
};
const mutations = {
  SET_TOKEN(state, token) {
    state.accessToken = token;
  },
  CLEAR_TOKEN(state) {
    state.accessToken = null,
     localStorage.clear();
  },
};
const actions = {
  async login(context, { email, password }) {
    const res = await axios.post(
      `http://192.168.108.127:4000/auth/api/admin-login`,
      {
        email,
        password,
      }
    );
    const accessToken = res.data.accessToken;
    localStorage.setItem(`accessToken`, accessToken);
    context.commit(`SET_TOKEN`, accessToken);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
