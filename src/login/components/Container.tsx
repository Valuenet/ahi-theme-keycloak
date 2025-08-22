import styled from "styled-components";

const ThemeContainer = styled.div`
    display: flex;
    min-height: 100vh;
    align-items: center;

    .themeCol {
        display: flex;
        flex: 1;
        padding: 2rem;
    }

    .themeCol1 img {
        width: 100%;
    }

    .themeCol2 {
        flex-direction: column;
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;

        .themeCol1 {
            order: 2;
            padding: 0; 
        }
        .themeCol2 {
            order: 1;
        }
    }
`;

export default ThemeContainer