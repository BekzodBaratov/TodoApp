import axios from "axios";
export async function getLists() {
  try {
    const res = await axios.get("/lists/");
    return res.data;
  } catch (e) {
    return e;
  }
}
export async function getOneList(id) {
  try {
    const res = await axios.get(`/lists/${id}`);
    return res;
  } catch (e) {
    return e;
  }
}
export async function postList(data, id = "") {
  try {
    const res = await axios.post(`/lists${id}`, data);
    return res.data;
  } catch (e) {
    return e;
  }
}
export async function delLists(val) {
  try {
    const res = await axios.delete(`/lists/${val}`);
    return res.data;
  } catch (e) {
    return e;
  }
}
