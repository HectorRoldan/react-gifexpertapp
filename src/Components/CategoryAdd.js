import React, { useState } from 'react'
import PropTypes from "prop-types";

export const CategoryAdd = ({ setCategories }) => {

    const [category, setCategory] = useState('');

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (category.trim().length > 2) {
            setCategories(cats => ([category, ...cats]));
            setCategory('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input 
            value = {category}
            onChange={handleCategoryChange} 
            type="text" 
            name="category" />
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
};