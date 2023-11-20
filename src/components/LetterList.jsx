import { useNavigate } from "react-router-dom";
import {
    StCardContainer,
    StSingleCard,
    StProfileImg,
    StSpan,
    StSpanContainer,
} from "./HomeStyledComponents";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import picture from "../components/profileImg.png";

const LetterList = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const { letters, memberFilter } = useSelector((state) => state.reducers);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/hyeomin/mockjson/topics")
            .then((response) => response.json())
            .then((json) => setData([...json]))
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <StCardContainer>
            {[...data, ...letters]
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
                                <h3
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                    }}
                                >
                                    {item.nickname}
                                </h3>
                                <span>
                                    {new Date(
                                        item.createdAt
                                    ).toLocaleDateString("ko-KR", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        weekday: "long",
                                        hour: "numeric",
                                        minute: "numeric",
                                        hour12: true,
                                    })}
                                </span>
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
        </StCardContainer>
    );
};

export default LetterList;
