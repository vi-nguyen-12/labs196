import axios from "axios";
const KEY = "AIzaSyBZktqJ_OEvl2gEhA7VABfdGV5O3vxY-m4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
  // headers: {
  //   Authorization:
  //     "Bearer ya29.A0ARrdaM8SxtUNbLgw7fkomuGi0UDfsNs_wa-m4840DL0QVvmgOge9ZeuADsO1p4MzEGzxxoaSlUEGSgPOYFybngzteiNNvzWvCH-rVCvkQEUATez7LXrlHvu9lDEAPPi23GJfgAdUctcjPiGOjpVZ_FUt_Ecq",
  // },
});
