
import React, { useState } from "react";
import { CategoryAdd } from "./Components/CategoryAdd";
import { GifGrid } from "./Components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState([""]);


    return (

        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={setCategories} />

            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category} />

                    ))
                }
            </ol>

        </>
    );
};

export default GifExpertApp;