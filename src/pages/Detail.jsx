import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    StCardContainer,
    StCardHeader,
    StButtonContainer,
    StButton,
    StInputArea,
} from "../components/DetailStyledComponents";
import { StContainer } from "../components/HomeStyledComponents";

const Detail = function () {
    const [data, setData] = useState([]);
    const [editItemId, setEditItemId] = useState(null);
    const [editValue, setEditValue] = useState("");
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/hyeomin/mockjson/topics")
            .then((response) => response.json())
            .then((json) => setData([...json]))
            .catch((error) => console.error("Error:", error));
    }, []);

    const onEditButtonClick = (item) => {
        setEditItemId(item.id);
        setEditValue(item.content);
    };

    const onEditChange = (e) => {
        setEditValue(e.target.value);
    };

    const onSaveEditClick = () => {
        const editedData = data.map((item) => {
            if (item.id === editItemId) {
                if (item.content === editValue) {
                    alert("수정사항이 없습니다.");
                } else {
                    return { ...item, content: editValue };
                }
            }
            return item;
        });
        setData(editedData);
        setEditItemId(null);
    };

    const onDeleteButtonClick = (item) => {
        const isConfirmed = window.confirm("삭제하시겠습니까");
        if (isConfirmed) {
            const deletedData = data.map((item) => {
                return !item.id === editItemId;
            });
            setData(deletedData);
            navigate("/");
        }
    };

    const foundMemberData = data.find((item) => {
        return item.id === params.id;
    });

    if (!foundMemberData) {
        return <div>Loading data or member not found...</div>;
    }

    return (
        <StContainer>
            <StCardContainer>
                <StCardHeader>
                    <img
                        style={{ width: "120px", borderRadius: "50%" }}
                        alt="dummy"
                        src={foundMemberData.avatar}
                    />
                    <h3>{foundMemberData.nickname}</h3>
                </StCardHeader>
                <span style={{ backgroundColor: "white", padding: "0, 20px" }}>
                    to: {foundMemberData.writedTo}
                </span>
                <StInputArea>
                    {editItemId === foundMemberData.id ? (
                        <input
                            type="textarea"
                            value={editValue}
                            onChange={onEditChange}
                        />
                    ) : (
                        <span>{foundMemberData.content}</span>
                    )}{" "}
                </StInputArea>
                <StButtonContainer>
                    {editItemId === foundMemberData.id ? (
                        <StButton onClick={onSaveEditClick}>저장</StButton>
                    ) : (
                        <StButton
                            onClick={() => onEditButtonClick(foundMemberData)}
                        >
                            수정
                        </StButton>
                    )}
                    <StButton
                        onClick={() => onDeleteButtonClick(foundMemberData)}
                    >
                        삭제
                    </StButton>
                </StButtonContainer>
            </StCardContainer>
        </StContainer>
    );
};

export default Detail;
