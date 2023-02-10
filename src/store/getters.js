export default {
  getAllLists(state) {
    if (!state.lists) return;
    return state.lists;
  },
  getListCount(state) {
    return state.lists.filter((list) => !list.is_done).length;
  },
  isEmptyList(state) {
    return state.lists.length === 0;
  },
  getOneList(state) {
    return state.list;
  },
};
