import { axiosInstance } from "@/shared/api";

const fetchStories = async (params = { limit: 10, offset: 0, start_date: null, end_date: null }) => {

  try {
    const res = await axiosInstance.get('/api/stories/', {
      params,
    });

    if (res.status === 200) {
      return res?.data || {};
    }

    return {};

  } catch (err) {
    console.error(err);
  }
}

const deleteStoryById = async (id) => {
  try {
    const res = await axiosInstance.delete(`/api/stories/${id}`);

    if (res.status === 200) {
      return res?.data || {};
    }

    return {}

  } catch (err) {
    console.error(err);
  }
}

const deleteAllStories = async () => {
  try {
    const res = await axiosInstance.delete('/api/stories/all');
    if (res.status === 200) {
      return res?.data || {};
    }

    return {}

  } catch (err) {
    console.error(err);
  }
}

const deleteSelectedStories = async (story_ids) => {
  console.log({ story_ids })
  try {
    const res = await axiosInstance.delete('/api/stories/', { data: { story_ids } });
    console.log(res)
    if (res.status === 200) {
      return res?.data || {};
    }

    return {}

  } catch (err) {
    console.error(err);
  }
}

export const historyAPI = {
  fetchStories,
  deleteStoryById,
  deleteAllStories,
  deleteSelectedStories
}
