import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

    console.log(data);

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

    console.log("found data ->", foundMemberData);

    if (!foundMemberData) {
        return <div>Loading data or member not found...</div>;
    }

    return (
        <div>
            <img alt="dummy" src={foundMemberData.avatar} />
            <h3>{foundMemberData.nickname}</h3>
            <span>to: {foundMemberData.writedTo}</span> <br />
            {editItemId === foundMemberData.id ? (
                <input
                    type="textarea"
                    value={editValue}
                    onChange={onEditChange}
                />
            ) : (
                <span>{foundMemberData.content}</span>
            )}
            {editItemId === foundMemberData.id ? (
                <button onClick={onSaveEditClick}>저장</button>
            ) : (
                <button onClick={() => onEditButtonClick(foundMemberData)}>
                    수정
                </button>
            )}
            <button onClick={() => onDeleteButtonClick(foundMemberData)}>
                삭제
            </button>
        </div>
    );
};

export default Detail;
