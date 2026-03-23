import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Searched = () => {
    const [searchedRecipes, getSearchedRecipes] = useState([]);
    let params = useParams();
    console.log(params);

    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${name}`);
        const recipes = await data.json();
        console.log(recipes);
        getSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return (
        <Grid>
            {searchedRecipes.map((item) => {
                return (
                    <Card key={item.id}>
                        <img src={item.image} alt="" />
                        <h5>{item.title}</h5>
                    </Card>
                );
            })}
        </Grid>
    );
};

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }

    a {
        text-decoration: none;
    }

    h5 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Searched;