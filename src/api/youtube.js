import Axios from "axios";

const KEY = process.env.REACT_APP_YOUTUBE_PUBLIC_DATA_KEY;

export default Axios.create({
  baseURL: "https:/www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY
  }
});
