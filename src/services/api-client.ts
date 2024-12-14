import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c4008ebf3c064b639442c4f519d82048",
  },
});