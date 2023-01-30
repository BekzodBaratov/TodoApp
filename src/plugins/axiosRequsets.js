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
    return res.data;
  } catch (e) {
    return e;
  }
}
export async function postList(data) {
  try {
    const res = await axios.post(`/lists/`, data);
    return res.data;
  } catch (e) {
    return e;
  }
}
export async function patchList(data, id = "") {
  try {
    const res = await axios.patch(`/lists/${id}`, data);
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
