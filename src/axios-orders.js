import axios from "axios"

const instance = axios.create({
    baseURL: "https://react-my-burger-99cad-default-rtdb.firebaseio.com/"
})

export default instance