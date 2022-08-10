import axios from "axios";
import host from "services/controller.js";

const url = `${host}/api/books`;

export const getBooks = async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (_) {
    return null;
  }
};

export const getBookById = async (id) => {
  try {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  } catch (_) {
    return null;
  }
};

export const addReview = async (text,userId,rating,bookId) => {
  try {
    const res = await axios.post(`${url}/${bookId}/review`, { text,userId,rating });
    return res.data;
  }catch(_){
    return null;
  }
};
