import axios from "axios";
import soundAdd from "../assets/paper_add.wav";
import soundDel from "../assets/paper_tear.wav";

const addAudio = new Audio(soundAdd);
const tearAudio = new Audio(soundDel);

export default {
  async getListsApi({ commit }) {
    try {
      const res = await axios.get("/lists");
      commit("setLists", res.data);
    } catch (err) {
      alert("type 'npm run dev' and 'npm run server' in the terminal to start the site!");
      console.log(err);
    }
  },
  async getOneListApi({ commit }, payload) {
    try {
      const res = await axios.get(`/lists/${payload.id}`);
      commit("setlist", res.data);
    } catch (error) {
      console.log(error);
    }
  },
  async delListApi({ commit }, payload) {
    try {
      await axios.delete(`/lists/${payload.id}`);
      tearAudio.play();
      commit("delList", payload);
    } catch (err) {
      console.log(err);
    }
  },
  async addListApi({ commit }, payload) {
    try {
      await axios.post(`/lists`, payload);
      addAudio.play();
      commit("addList", payload);
    } catch (error) {
      console.error(error);
      alert("type 'npm run dev' and 'npm run server' in the terminal to start the site!");
    }
  },
  async editListApi({ commit }, payload) {
    try {
      await axios.patch(`/lists/${payload.id}`, { list: payload.list });
      commit("editList", payload);
    } catch (error) {
      console.log(error);
    }
  },
  async toggleDoneApi({ commit }, payload) {
    try {
      await axios.patch(`/lists/${payload.id}`, { is_done: payload.bool });
      commit("toggleDone", payload);
    } catch (error) {
      console.error(error);
    }
  },
};
