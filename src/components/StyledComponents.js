import styled from "styled-components";
// import Home from "../pages/Home";

const StContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: grey;
    padding: 0 30px;
`;

const StHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100px;
`;

const StNav = styled.nav`
    display: flex;

    margin: 20px;
    gap: 10px;

    // later - 화면 비율에 맞춰서 배치해보기
`;

const StMemberButton = styled.button`
    width: 80px;
    background-color: ${(props) => props.backgroundColor};
    border-color: grey;
    border-radius: 8px;
`;

const StForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 500px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    gap: 15px;
`;

const StInputContainer = styled.div`
    display: flex;
`;

const StInput = styled.input`
    width: 400px;
    margin-left: auto;
`;

const StCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: green;
`;

const StSingleCard = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    column-gap: 20px;
    background-color: pink;

    width: 350px;
    height: 180px;
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
    /* grid-template-rows: 20% 40% 20% 20%; */
    background-color: lightblue;
`;

const StSpan = styled.span`
    height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    /* word-wrap: break-word; */
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
