import React, { useState } from "react";
import {
    StContainer,
    StForm,
    StNav,
    StMemberButton,
    StHeader,
    StInput,
    StInputContainer,
} from "../components/StyledComponents";
import picture from "../components/profileImg.png";
import LetterList from "../components/LetterList";
import { MemberContext } from "../context/MemberContext";

function Home() {
    // const navigate = useNavigate();

    const membersName = [
        { id: 0, name: "하니" },
        { id: 1, name: "혜인" },
        { id: 2, name: "해린" },
        { id: 3, name: "민지" },
        { id: 4, name: "다니엘" },
    ];

    const [nickname, setNickname] = useState("");
    const [message, setMessage] = useState("");
    const [selected, setSelected] = useState(membersName[0].name);
    const [letters, setLetters] = useState([]);
    const [memberFilter, setMemberFilter] = useState("");
    const [clickedMember, setClickedMember] = useState("");

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        if (name === "nickname") {
            const inputValue = value;
            if (inputValue.length > 10) {
                alert("닉네임은 10자 미만이어야 합니다.");
            } else {
                setNickname(inputValue);
            }
        } else if (name === "message") {
            const inputValue = value;
            if (inputValue.length > 300) {
                alert("내용은 300자 미만이어야 합니다.");
            } else {
                setMessage(value);
            }
        }
    };

    const onSelectHandler = (event) => {
        setSelected(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const newLetter = {
            id: letters.length + 1,
            nickname,
            message,
            selected,
        };

        if (nickname.length === 0) {
            alert("닉네임이 입력되지 않았습니다.");
        } else if (message.length === 0) {
            alert("내용이 입력되지 않았습니다.");
        } else {
            setLetters([...letters, newLetter]);
        }
        setNickname("");
        setMessage("");
        console.log(newLetter);
    };

    return (
        <StContainer>
            <StHeader>NewJeans Fan Letter Collection</StHeader>

            <StForm onSubmit={onSubmitHandler}>
                <StInputContainer className="nickname-input">
                    <label>닉네임: </label>
                    <StInput
                        type="text"
                        name="nickname"
                        value={nickname}
                        onChange={onChangeHandler}
                        maxLength={10}
                    />
                </StInputContainer>
                <div className="message-input">
                    내용:&nbsp;
                    <StInput
                        type="text"
                        name="message"
                        value={message}
                        onChange={onChangeHandler}
                        maxLength={300}
                    />
                </div>
                <div className="select-member-input">
                    누구에게 보내실건가요?&nbsp;
                    <select value={selected} onChange={onSelectHandler}>
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
                {/* onclick 하면 selected를 해당 멤버 이름으로 바꿔야 함 */}
                {membersName.map((member) => {
                    return (
                        <StMemberButton
                            key={member.id}
                            value={member.name}
                            onClick={() => {
                                setMemberFilter(member.name);
                                setClickedMember(member.name);
                            }}
                            backgroundColor={
                                clickedMember === member.name
                                    ? "yellow"
                                    : "purple"
                            }
                        >
                            {member.name}
                        </StMemberButton>
                    );
                })}
            </StNav>
            <MemberContext.Provider value={{ letters, memberFilter, picture }}>
                <LetterList />
            </MemberContext.Provider>
            {/* <LetterList
                letters={letters}
                memberFilter={memberFilter}
                picture={picture}
            /> */}
        </StContainer>
    );
}

export default Home;
