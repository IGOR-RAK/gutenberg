import { makeAutoObservable } from "mobx";
import { IBook } from "../models/ibook";



export default class Books{
  items= [] as IBook[]

  constructor() {
      makeAutoObservable(this);
  }

 

  }
