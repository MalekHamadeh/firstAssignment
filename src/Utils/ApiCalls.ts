import AxiosInstance from "./AxiosInterceptor";

const ApiService = {
  loginUser: (email: string, password: string) =>
    AxiosInstance({
      url: "/login",
      data: {
        email,
        password,
      },
      method: "POST",
    }),
};

export default ApiService;
