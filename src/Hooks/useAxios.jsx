// import axios from "axios";

// const axiousInstace = axios.create({
//     baseURL:'http://localhost:5000'
// })

// const useAxious = () => {
//     return axiousInstace
// };

// export default useAxious;

import axios from "axios";

const AxiousPublic = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxios = () => {
    return AxiousPublic;
};

export default useAxios;