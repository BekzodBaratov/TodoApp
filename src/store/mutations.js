export default {
  setLists(state, payload) {
    state.lists = payload;
  },
  setlist(state, payload) {
    state.list = payload;
  },
  delList(state, payload) {
    let index = null;
    state.lists.forEach((list, i) => {
      if (list.id === payload.id) index = i;
    });
    state.lists.splice(index, 1);
  },
  addList(state, payload) {
    state.lists.push(payload);
  },
  editList(state, payload) {
    state.lists[payload.id].list = payload.list;
  },
  toggleDone(state, payload) {
    state.lists.forEach((list) => {
      if (list.id === payload.id) list.is_done = payload.bool;
    });
  },
};
