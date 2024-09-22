// import axios from "axios";

// const axiousInstace = axios.create({
//     baseURL:'https://public-restaurant-server.vercel.app'
// })

// const useAxious = () => {
//     return axiousInstace
// };

// export default useAxious;

import axios from "axios";

const AxiousPublic = axios.create({
    baseURL: 'https://public-restaurant-server.vercel.app'
})

const useAxios = () => {
    return AxiousPublic;
};

export default useAxios;