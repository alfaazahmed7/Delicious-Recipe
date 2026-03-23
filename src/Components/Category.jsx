import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
    return (
        <List>
            <NavLink to={"/cuisine/Italian"}>
                <FaPizzaSlice />
                <h5>Italian</h5>
            </NavLink>
            <NavLink to={"/cuisine/American"}>
                <FaHamburger />
                <h5>American</h5>
            </NavLink>
            <NavLink to={"/cuisine/Thai"}>
                <GiNoodles />
                <h5>Thai</h5>
            </NavLink>
            <NavLink to={"/cuisine/Japanese"}>
                <GiChopsticks />
                <h5>Japanes</h5>
            </NavLink>
        </List>
    );
};

const List = styled.div({
    display: "flex",
    justifyContent: "center",
    margin: "2rem, 0rem"
});

export default Category;