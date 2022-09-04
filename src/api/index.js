import axios from 'axios';

const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPosts = async (pageNumber, size) => {
  try {
    const res = await apiClient.get('/v1/posts', {
      params: { page: pageNumber, size: size },
    });
    return res.data;
  } catch (err) {
    throw new Error();
  }
};
export const getPostDetail = async (postId) => {
  try {
    const res = await apiClient.get(`/v1/posts/${postId}`);
    return res.data.data;
  } catch (err) {
    throw new Error();
  }
};
export const putPostDetail = async (postId) => {
  try {
    const res = await apiClient.put(`/v1/posts/${postId}`);
    return res.data;
  } catch (err) {
    throw new Error();
  }
};
