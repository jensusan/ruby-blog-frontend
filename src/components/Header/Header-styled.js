import styled from "styled-components";

export const Wrapper = styled.div`
    text-transform: uppercase;
    margin: 40px;
`;

export const Title = styled.div`
    margin-bottom: 30px;
    .main {
        display: block;
        letter-spacing: 3px;
        font-weight: var(--xbold);
        margin-bottom: 5px;
    }
    .sub {
        font-size: 18px;
        letter-spacing: 2px;
        font-weight: var(--bold);
    }
`;

export const Nav = styled.div`
    ul {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
    }
`;