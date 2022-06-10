import { makeAutoObservable } from "mobx";
import { IBook } from "../models/ibook";
import Api from "../api/api";

export default class Books {
  items = [] as IBook[];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setItems(books: IBook[]) {
    this.items = books;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async fetchItems() {
    try {
      this.setLoading(true);
      const res = await Api.getCards(2);
      const results = res?.data?.results
      this.setItems(results);
      this.setLoading(false);
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      alert(message);
    }
  }
}
