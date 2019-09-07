import axios from "axios";

const KEY = "AIzaSyDOc4rp6fo5T06H_F7SDttA-FJeAMKYzqc";

export const baseParams = {
  part: "snippet",
  maxResults: 8,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
