import axiosWithAuth from "./axiosWithAuth"

const fetchColors = () => {
    axiosWithAuth().get("http://localhost:5000/api/colors")
    .then(res => {
        return res
    })
    .catch(err => {
        console.log(err.message)
        return err
    })
}

export default fetchColors
