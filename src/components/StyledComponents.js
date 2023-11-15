import styled from "styled-components";
// import Home from "../pages/Home";

const StContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 40%;
    background-color: grey;
    padding: 50px;
    margin: 30px auto;
    /* align-items: center; */
`;

const StHeader = styled.header`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
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
    flex-direction: row;
    align-items: center;
    justify-content: left;

    max-width: 1200px;
    height: 180px;
    background-color: green;
`;

const StSingleCard = styled.div`
    display: flex;
    background-color: pink;

    width: 500px;
    height: 180px;
    padding: 25px 15px;
    margin: 20px;
    gap: 10px;

    overflow: hidden;
`;

const StProfileImg = styled.img`
    max-width: 100px; // Ensures the image doesn't exceed the card's width
    max-height: 50%; // Ensures the image fits within the card's height
    /* object-fit: cover; // Adjusts the image to cover the area without distorting */
    border-radius: 100px;
`;

const StSpan = styled.span`
    display: block; // or inline-block
    width: calc(100% - 100px); // Adjust the width as needed
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
};
