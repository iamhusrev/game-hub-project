import axios from "axios";




export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "766319ebc1b74dd49c203003a2cdb04d",
  },
});
