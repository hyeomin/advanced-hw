import { useNavigate } from "react-router-dom";
import {
    StCardContainer,
    StSingleCard,
    StProfileImg,
    StSpan,
    StSpanContainer,
} from "./StyledComponents";
import { useEffect, useState } from "react";

const LetterList = ({ letters, memberFilter, picture }) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/hyeomin/mockjson/topics")
            .then((response) => response.json())
            .then((json) => setData([...json]))
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <StCardContainer>
            {data
                .filter((item) => {
                    return (
                        memberFilter === "" || item.writedTo === memberFilter
                    );
                })
                .map((item) => {
                    return (
                        <StSingleCard className="single-card" key={item.id}>
                            <StProfileImg src={item.avatar} alt="dummy" />
                            <StSpanContainer style={{ display: "grid" }}>
                                <h3>{item.nickname}</h3>
                                <StSpan>{item.content}</StSpan>
                                <span>to: {item.writedTo}</span>
                                <button
                                    onClick={() => {
                                        navigate(`/${item.id}`);
                                    }}
                                >
                                    자세히 보기
                                </button>
                            </StSpanContainer>
                        </StSingleCard>
                    );
                })}
            {letters
                .filter(
                    (item) =>
                        memberFilter === "" || item.selected === memberFilter
                )
                .map((item) => {
                    return (
                        <StSingleCard className="single-card" key={item.id}>
                            <StProfileImg src={picture} alt="null" />
                            <div>
                                <h3>{item.nickname}</h3>
                                <span>{item.message}</span>
                                <span>to: {item.selected}</span>
                                <button
                                    onClick={() => {
                                        navigate(`/${item.id}`);
                                    }}
                                >
                                    자세히 보기
                                </button>
                            </div>
                        </StSingleCard>
                    );
                })}
        </StCardContainer>
    );
};

export default LetterList;
