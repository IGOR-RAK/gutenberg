import axios from "axios";
class Api {
 
  getCards(page: number) {
    return new Promise((resolve, reject) => {
      const response = axios.get(
        `https://gnikdroy.pythonanywhere.com/api/book/?page=${page}`
      );
      resolve(response);
    });
  }
  getCardsByAuthor(author: string) {
    
    return new Promise((resolve, reject) => {
      const response = axios.get(
        `https://gnikdroy.pythonanywhere.com/api/book/?search=${author}`
      );
      resolve(response);
    });
  }
}
export default new Api();
