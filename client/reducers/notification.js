import * as actions from "../actions/actions";

const initialState = {
    permanentNotification: false,
    message:"Notification",
    action:null,
    title:"Title!",
    dismissAfter: 2000,
    onDismiss: () => { return false },
    // onClick: () => {return false},
};

const notification = (state = initialState, action) => {
    switch (action.type) {
        case actions.NOTIFICATION_SHOW:
            return Object.assign({}, state, action.response, {isActive: true});
        default:
            return state
    }
};

export default notification;