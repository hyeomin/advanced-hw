export const setLetters = (letters) => ({
    type: "SET_LETTERS",
    letters,
});

export const setMemberFilter = (filter) => ({
    type: "SET_MEMBER_FILTER",
    filter,
});

const initialState = {
    memberFilter: "",
    letters: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MEMBER_FILTER":
            return {
                ...state,
                memberFilter: action.filter,
            };
        case "SET_LETTERS":
            return {
                ...state,
                letters: action.letters,
            };
        default:
            return state;
    }
};

export default rootReducer;
