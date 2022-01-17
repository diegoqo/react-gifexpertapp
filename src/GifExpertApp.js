import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    //const categories = ['Cat1', 'Cat2', 'Cat3'];
    const [categories, setCategories] = useState(['One Punch']);

    /*const handleAdd = () => {
        setCategories([...categories, 'new Category']);
        //setCategories(cats => [...cats, 'new Category']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    categories
                        .map(cat => <GifGrid
                            category={cat}
                            key={cat}
                        />)
                }
            </ol>
        </>
    );
}
