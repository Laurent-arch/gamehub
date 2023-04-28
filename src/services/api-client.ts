import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b6e378fe45804717ad02efdde5e14180",
  },
});