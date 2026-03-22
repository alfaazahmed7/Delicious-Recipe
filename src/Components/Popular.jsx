import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const check = localStorage.getItem("popular");

        if (check) {
            setPopular(JSON.parse(check));
        }

        else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
        }
    }

    return (
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide
                    options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "3rem",
                        breakpoints: {
                            1280: {
                                perPage: 4,
                                gap: "2rem",
                            },
                            1024: {
                                perPage: 3,
                                gap: "1.5rem",
                            },
                            768: {
                                perPage: 2,
                                gap: "1rem",
                            },
                            640: {
                                perPage: 1,
                                gap: "0.5rem"
                            }
                        },
                    }}
                >
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div({
    margin: "4rem 0rem",
    width: "100%",
});

const Card = styled.div({
    minHeight: "20rem",
    borderRadius: "2rem",
    overflow: "hidden",
    position: "relative",

    "& img": {
        borderRadius: "2rem",
        position: "absolute",
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },

    "& p": {
        position: "absolute",
        zIndex: "10",
        top: "50%",
        bottom: "0%",
        color: "white",
        width: "100%",
        textAlign: "center",
        fontWeight: "600",
        fontSize: "1rem",
        height: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});

const Gradient = styled.div({
    zIndex: 3,
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))"
});

export default Popular;