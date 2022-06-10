import axios, { AxiosRequestConfig } from "axios";
class Api {
    getCards(page:number): Promise<any> {
        const response = axios.get(
          `https://gnikdroy.pythonanywhere.com/api/book/?page=${page}`
        );
        return response;
      }

}

export default new Api();

