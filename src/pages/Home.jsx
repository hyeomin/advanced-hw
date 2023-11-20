import React, { useState } from "react";
import {
    StContainer,
    StForm,
    StNav,
    StMemberButton,
    StHeader,
    StInput,
    StInputContainer,
} from "../components/HomeStyledComponents";
import LetterList from "../components/LetterList";
import { useDispatch, useSelector } from "react-redux";
import { setLetters, setMemberFilter } from "../redux/modules/letters";
import picture from "../components/profileImg.png";
import { v4 as uuidv4 } from "uuid";

function Home() {
    const membersName = [
        { id: 0, name: "Jim Halpert" },
        { id: 1, name: "Pam Beesly" },
        { id: 2, name: "Michael Scott" },
        { id: 3, name: "Dwight Schrute" },
        { id: 4, name: "Angela Martin" },
        { id: 5, name: "Oscar Martinez" },
    ];

    const [nickname, setNickname] = useState("");
    const [content, setContent] = useState("");
    const [clickedMember, setClickedMember] = useState("");
    const [writedTo, setWritedTo] = useState(membersName[0].name);

    const { letters } = useSelector((state) => state.reducers);
    const dispatch = useDispatch();

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        if (name === "nickname") {
            const inputValue = value;
            if (inputValue.length > 10) {
                alert("닉네임은 10자 미만이어야 합니다.");
            } else {
                setNickname(inputValue);
            }
        } else if (name === "content") {
            const inputValue = value;
            if (inputValue.length > 300) {
                alert("내용은 300자 미만이어야 합니다.");
            } else {
                setContent(value);
            }
        }
    };

    const onSelectHandler = (event) => {
        setWritedTo(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const newLetter = {
            createdAt: new Date().toISOString(),
            nickname,
            avatar: picture,
            content,
            writedTo,
            id: uuidv4,
        };

        if (nickname.length === 0) {
            alert("닉네임이 입력되지 않았습니다.");
        } else if (content.length === 0) {
            alert("내용이 입력되지 않았습니다.");
        } else {
            dispatch(setLetters([...letters, newLetter]));
        }
        setNickname("");
        setContent("");
    };

    const handleMemberFilterClick = (memberName) => {
        dispatch(setMemberFilter(memberName));
        setClickedMember(memberName); // 클릭한 멤버를 상태로 저장
    };

    const handleShowAllClick = () => {
        dispatch(setMemberFilter(""));
        setClickedMember(""); // 선택된 멤버 초기화
    };

    return (
        <StContainer>
            <StHeader>
                <img
                    style={{ width: "100%" }}
                    src="https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Campaign/landingpages/library/theoffice/mainpage/office-social-min.png/_jcr_content/renditions/original"
                    alt="no image"
                />
                <h1
                    style={{
                        padding: "30px",
                        fontSize: "30px",
                        color: "white",
                    }}
                >
                    The Office Letter Collection
                </h1>
            </StHeader>
            <StForm onSubmit={onSubmitHandler}>
                <StInputContainer className="nickname-input">
                    <label style={{ alignContent: "right" }}>
                        닉네임:&nbsp;
                    </label>
                    <StInput
                        type="text"
                        name="nickname"
                        value={nickname}
                        onChange={onChangeHandler}
                        maxLength={10}
                    />
                </StInputContainer>
                <StInputContainer className="content-input">
                    내용:&nbsp;
                    <StInput
                        style={{ height: "100px" }}
                        type="text"
                        name="content"
                        value={content}
                        onChange={onChangeHandler}
                        maxLength={300}
                    />
                </StInputContainer>
                <div className="select-member-input">
                    누구에게 보내실건가요?&nbsp;
                    <select value={writedTo} onChange={onSelectHandler}>
                        {membersName.map((member) => {
                            return (
                                <option value={member.name} key={member.id}>
                                    {member.name}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <button type="submit">등록하기</button>
            </StForm>
            <StNav>
                <StMemberButton
                    onClick={handleShowAllClick}
                    backgroundColor={
                        clickedMember === "" ? "yellow" : "lightgray"
                    }
                >
                    All
                </StMemberButton>
                {membersName.map((member) => {
                    return (
                        <StMemberButton
                            key={member.id}
                            value={member.name}
                            onClick={() => {
                                handleMemberFilterClick(member.name);
                            }}
                            backgroundColor={
                                clickedMember === member.name
                                    ? "yellow"
                                    : "lightgray"
                            }
                        >
                            {member.name}
                        </StMemberButton>
                    );
                })}
            </StNav>
            <LetterList />
        </StContainer>
    );
}

export default Home;
