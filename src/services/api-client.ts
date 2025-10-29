import axios from "axios";

export default axios.create({
  params: {
    key: "766319ebc1b74dd49c203003a2cdb04d",
  },
  baseURL: "https://api.rawg.io/api",
});
