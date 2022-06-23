import React from 'react';
import { useState } from 'react';

const Pictures = ({works, changeFilter, deleteWorks}) => {
    const [selectPic, setSelectPic] = useState([]);
    const [isAll, setIsAll] = useState(false);
  
    function pressFilter(e, category){
        e.stopPropagation();
        changeFilter(category);
    }

    function changeSelectPic(e, name){
        e.stopPropagation();
        if (selectPic.includes(name)){
            setSelectPic(selectPic.filter(el => el !== name));
        }else{
            setSelectPic([...selectPic, name]);
        }
    }

    function runDelete(e){
        if (selectPic.length > 0 && e.key === "Delete"){
            deleteWorks(selectPic);
        }
    }
    document.addEventListener("keydown", runDelete);

    return (
          <div className="gallery__works works" >
            <div className="works__block">
               {(isAll ? works : works.slice(0, 9)).map(el => {
                  return <div className={selectPic.includes(el.name) ? "work mark" : "work"} 
                               key={el.name} 
                               onClick={(e) => changeSelectPic(e, el.name)}
                               >
                             <div className="work__info">
                                 <button className="work__category" 
                                         onClick={(e) => pressFilter(e, el.category)}
                                         >
                                    {el.category}
                                 </button> 
                                 <h3 className="work__name">{el.name}</h3>
                             </div>
                              <img className="work__picture" src={el.src} alt="Work" />
                          </div>
    })} 
</div>
{works.length > 9 && (<button className="work__more_btn" 
                               onClick={() => setIsAll(!isAll)}
                                > 
                             {isAll ? "Less" : "Load more"}
                       </button>)}
         </div>  
    );
};

export default Pictures;