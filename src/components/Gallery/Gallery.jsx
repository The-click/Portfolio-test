import React from 'react';
import './Gallery.css';
import Filters from './Filters';
import Pictures from './Pictures';
import { useState } from 'react';
import { dataWorks } from './dataWorks';
import { useMemo } from 'react';

const Gallery = () => {
    const [works, setWorks] = useState(dataWorks);
    const [filter, setFilter] = useState("Show All");

    function changeFilter(value){
        setFilter(value);
    }

    function deleteWorks(names){
        let array = works.filter(el => !names.includes(el.name));
        return setWorks(array);
    }

    const filterWorks = useMemo(() => {
        if (filter === "Show All") return works;
        return works.filter(el => el.category === filter);
    }, [filter, works])

    return (
        <div className="gallery">
            <div className="container">
                <Filters filter={filter} changeFilter={changeFilter}></Filters>
                <Pictures works={filterWorks} changeFilter={changeFilter} deleteWorks={deleteWorks}></Pictures>
            </div>
            
        </div>
    );
};

export default Gallery;