import axios from "axios";
class Api {
  // getCards(page:number): Promise<any> {
  //     const response = axios.get(
  //       `https://gnikdroy.pythonanywhere.com/api/book/?page=${page}`
  //     );
  //     return response;
  //   }
  getCards(page: number) {
    return new Promise((resolve, reject) => {
      const response = axios.get(
        `https://gnikdroy.pythonanywhere.com/api/book/?page=${page}`
      );
      resolve(response);
    });
  }
  getCardsByAuthor(author: string) {
    console.log("author", author);
    return new Promise((resolve, reject) => {
      const response = axios.get(
        `https://gnikdroy.pythonanywhere.com/api/book/?search=${author}`
      );
      resolve(response);
    });
  }
}
export default new Api();
