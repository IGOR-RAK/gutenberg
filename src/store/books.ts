import { makeAutoObservable } from "mobx";
import { IBook } from "../models/ibook";
import Api from "../api/api";

export default class Books {
  items = [] as IBook[];
  isLoading = false;
  page=0

  constructor() {
    makeAutoObservable(this);
  }

  setItems(books: IBook[]) {
    this.items = [...this.items,...books];
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async fetchItems() {
    try {
      this.setLoading(true);
      this.page += 1
      const res = await Api.getCards(this.page);
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
