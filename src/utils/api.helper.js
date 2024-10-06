import axios from "axios";

export const getData = async (url) => {
  try {
    let res = await axios.get(url);
    return { status: "success", data: res.data };
  } catch (error) {
    console.log(error);
    return { status: "fail", data: "something went wrong!" };
  }
};
