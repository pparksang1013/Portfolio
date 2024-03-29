import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Button = styled(motion(Link))`
    margin: 2.4rem 0 0 40rem;
    border: 1px solid var(--primary-color);
    border-radius: 40px;
    padding: 10px 20px;
    transition: 0.5s all;
    box-shadow: inset -1px -1px 4px rgba(0, 0, 0, 0.05);

    &:hover {
        background-color: var(--primary-color);
        color: #fff;
    }

    & svg {
        vertical-align: middle;
    }
`;

export const homeButtonStyle = {
    Button,
};
