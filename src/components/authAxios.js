import axios from "axios";

const authAxios = axios.create({
    baseURL: process.env.REACT_APP_URL,
});

authAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        const originalRequest = error.config;

        if (
            error.response.status === 401 &&
            originalRequest.url === "/talents/refreshToken"
        ) {
            return Promise.reject(error);
        }

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            return axios
                .post(
                    `${process.env.REACT_APP_URL}/talents/refreshToken`,
                    {},
                    { withCredentials: true }
                )
                .then((res) => {
                    if (res.status === 200) {
                        // sssessionStorage.setItem("accessToken", res.data.accessToken);

                        return Promise.resolve(res);
                    }
                })
                .catch((e) => {
                    //console.log(e);
                    return Promise.reject(e);
                });
        }
    }
);

export default authAxios;
