import React from 'react';

const Filters = ({filter, changeFilter}) => {
    function selectFilter(value){
        changeFilter(value);
    }
    return(<>
        <div className="gallery__filters filters" onClick={(e) => selectFilter(e.target.textContent)}>
            <button className={filter === "Show All" ? "filter selected" : "filter"}  >Show All</button>
            <button className={filter === "Design" ? "filter selected" : "filter"}  >Design</button>
            <button className={filter === "Branding" ? "filter selected" : "filter"}  >Branding</button>
            <button className={filter === "Illustration" ? "filter selected" : "filter"}  >Illustration</button>
            <button className={filter === "Motion" ? "filter selected" : "filter"}  >Motion</button>
        </div>
         <div className="gallery__filters select__wrap" >
            <select className="select"  
                    value={filter} 
                    onChange={(e) => selectFilter(e.target.value)}
                    >
                <option value="Show All">Show All</option>
                <option value="Design">Design</option>
                <option value="Branding">Branding</option>
                <option value="Illustration">Illustration</option>
                <option value="Motion">Motion</option>
            </select>
        </div>
        </>

    );
};

export default Filters;