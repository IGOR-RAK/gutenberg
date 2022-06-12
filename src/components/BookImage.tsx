import React from "react";
import love from "../img/love.png";
import heart from "../img/heart.png";

import { observer } from "mobx-react-lite";
import { IRenders } from "../models/ibook";

interface IBookImage {
  item: IRenders;
}

const BookImage: React.FC<IBookImage> = ({ item }) => {
    const [source,setSource] = React.useState(item.img_small)
    React.useEffect(()=>{
        const image = new Image;
        image.src = item.img?item.img:""
        image.onload = ()=>{ setTimeout(()=>{setSource(item.img)},1000) }
    },[item])
    const cn  = `progressive ${source===item.img_small?"loading":"loaded"}`
  return (
   
    <div className={cn}>{source&& <img width={"200px"} height={"280px"} src={source} alt="" />}</div>
    
  );
};

export default observer(BookImage);
