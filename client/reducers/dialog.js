import * as actions from "../actions/actions";

const initialState = {
    isActive: false,
    content: null,
    confirm: null
};

const dialog = (state = initialState, action) => {
    switch (action.type) {
        case actions.DIALOG_SHOW:
            return Object.assign({}, state, action.response, {isActive: true});
        case actions.DIALOG_HIDE:
            return Object.assign({}, state, action.response, {isActive: false});
        default:
            return state
    }
};

export default dialog;