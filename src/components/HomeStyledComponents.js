import styled from "styled-components";
// import Home from "../pages/Home";

const StContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #008eca;
    padding: 0 30px;
    margin-bottom: 3000px;
`;

const StHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: auto;
`;

const StNav = styled.nav`
    display: flex;

    margin: 20px;
    gap: 10px;

    // later - 화면 비율에 맞춰서 배치해보기
`;

const StMemberButton = styled.button`
    width: 100px;
    background-color: ${(props) => props.backgroundColor};
    border-color: grey;
    border-radius: 8px;
    font-size: 15px;
    border-color: transparent;
`;

const StForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;

    width: 500px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    gap: 15px;

    background-color: white;
`;

const StInputContainer = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
`;

const StInput = styled.input`
    width: 400px;
    margin-left: auto;
    align-items: end;
`;

// card

const StCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const StSingleCard = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    column-gap: 20px;

    background-color: white;
    border-radius: 5%;
    border: 1px solid black;

    width: 400px;
    height: 260px;
    padding: 25px 15px;
    margin: 10px;
`;

const StProfileImg = styled.img`
    width: 100%; // Ensures the image doesn't exceed the card's width
    max-height: 50%; // Ensures the image fits within the card's height
    object-fit: cover; // Adjusts the image to cover the area without distorting
    border-radius: 50%;
`;

const StSpanContainer = styled.div`
    display: grid;
    row-gap: 8px;

    height: 100%;
`;

const StSpan = styled.span`
    display: grid;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: lightgray;
    border-radius: 10px;
    padding: 5px;
    height: 100px;
`;

export {
    StContainer,
    StForm,
    StNav,
    StMemberButton,
    StHeader,
    StCardContainer,
    StInput,
    StInputContainer,
    StSingleCard,
    StProfileImg,
    StSpan,
    StSpanContainer,
};
