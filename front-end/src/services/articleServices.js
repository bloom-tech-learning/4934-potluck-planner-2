import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = async ()=> {

    const res = await axiosWithAuth().get("/classes")
    return res.data;
}

export default articleService;

