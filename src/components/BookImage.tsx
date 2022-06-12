import React from "react";
import love from "../img/love.png";
import heart from "../img/heart.png";
import { observer } from "mobx-react-lite";
import { IRenders } from "../models/ibook";


interface IBookImage {
  item: IRenders;
}

const BookImage: React.FC<IBookImage> = ({ item }) => {


  return (
    <div className="image">{item.img && <img src={item.img} alt="" />}</div>
  );
};

export default observer(BookImage);
