import { makeAutoObservable } from "mobx";
import { IBook, IResourses, IRenders } from "../models/ibook";
import Api from "../api/api";
import { IAgents } from "./../models/ibook";

export default class Books {
  items = [] as IBook[];
  isLoading = false;
  isSearchLoading = false;
  page = 0;
  searchInput = "";
  favorites: IRenders[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  setFavorites(fav: IRenders) {
    const find = this.favorites.find(item=>item.id===fav.id)
    if(!find){
      this.favorites.push(fav)
      localStorage.setItem('fav', JSON.stringify(this.favorites));
    } else {
     this.favorites=this.favorites.filter(item=>item.id !== fav.id);
     localStorage.setItem('fav', JSON.stringify(this.favorites));
    
    }
    
  }

  initFav(){
    const favorites:IRenders[] = JSON.parse(localStorage.getItem('fav') || "") 
    if(favorites){this.favorites=favorites}

  }

  setSearchInput(str: string) {
    this.searchInput = str;
  }

  addItems(books: IBook[]) {
    this.items = [...this.items, ...books];
  }

  setItems(books: IBook[]) {
    this.items = books;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  setSearchLoader(bool: boolean) {
    this.isLoading = bool;
  }

  async fetchItems() {
    try {
      this.setLoading(true);
      this.page += 1;
      const res: any = await Api.getCards(this.page);
      const results = res?.data?.results;
      this.addItems(results);
      if (this.page < 3) {
        this.fetchItems();
      }

      this.setLoading(false);
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      alert(message);
    }
  }

  async fetchItemsByAuthor() {
    try {
      if(this.searchInput.length === 0){        
        this.page = 0
        this.fetchItems()
      }
      if (this.searchInput.length > 3) {
        this.setItems([])
        this.setSearchLoader(true);
        const res: any = await Api.getCardsByAuthor(this.searchInput);
        const results = res?.data?.results;
        this.setItems(results);
        this.setSearchLoader(false);
      }
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      alert(message);
    }
  }

  getResourse(str: string, arr: IResourses[]) {
    const resourse = arr.find((item) => item.uri.includes(str));
    if (resourse) {
      return resourse.uri;
    }
    return null;
  }

  getAuthor(agents: IAgents[]) {
    const map = agents
      .filter((item) => item.type === "Author")
      .map((item) => item.person);
    const str: string = map[0];
    const arr = str.split(",");
    const result = arr[1]?.trim() + " " + arr[0];
    return result;
  }

  isFav(obj:IBook){
    const find = this.favorites.find(fav=>fav.id===obj.id)
    if(find){return true} else {return false}
  }

  get renders() {
    return this.items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        description: item.description,
        img: this.getResourse("medium", item.resources),
        link: this.getResourse("htm", item.resources),
        fav:this.isFav(item)
        // author: this.getAuthor(item.agents),
      };
    });
  }
}
