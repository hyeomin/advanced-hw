import styled from "styled-components";

const StCardContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 1000px;
    margin: 150px auto;
    padding: 30px 50px;

    border-radius: 2%;

    font-size: 20px;

    background-color: white;
`;

const StCardHeader = styled.div`
    display: flex;
    align-items: center;
    column-gap: 30px;
    font-size: 25px;
    margin-bottom: 10px;
`;

const StButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 30px;

    padding: 10px 0;
`;

const StButton = styled.button`
    width: 200px;
    height: 40px;
    border: 0.5px solid gray;
    border-radius: 8px;
`;

const StInputArea = styled.div`
    height: 200px;
    margin-bottom: 30px;
    padding: 20px;

    background-color: lightgray;
    border-radius: 10px;
`;

export {
    StCardContainer,
    StCardHeader,
    StButtonContainer,
    StButton,
    StInputArea,
};
