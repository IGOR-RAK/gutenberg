import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import love from "../img/love.png";
import heart from "../img/heart.png";

function Favlist() {
  const { books } = React.useContext(Context);

  if(books.favorites.length===0){ return null}

  return (
    <div className="fav_list">
         
        <div className="heart_num">
          Your favorites: {books.favorites.length}
        </div>
     
      <div >
        {books.favorites.map((fav) => (
          <div className="fav_box" key={fav.id}>
             <button
                    className="favorite_btn"
                    onClick={() => {
                      books.setFavorites(fav);
                    }}
                  >
                 <span style={{color:"red"}}>x</span>
                  </button>
            <div className="fav_image">
                {fav.img && <img src={fav.img} alt="" />}
              </div>
            <div>{fav.title}</div>
            {fav.link&& <div> <a
                      className="readhere_small"
                      href={fav.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read here...
                    </a>
                    </div>
                    
                    }
                   
            </div>
           
        ))}
      </div>
    </div>
  );
}

export default observer(Favlist);
