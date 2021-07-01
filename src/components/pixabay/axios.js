import axios from "axios";

export default axios.create({
    baseURL:"https://pixabay.com/api/",
    headers:{
        "content-type":"application/json"
    }
})