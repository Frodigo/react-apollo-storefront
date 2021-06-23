const ADD_MESSAGE = 'ADD_MESSAGE';
const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export function MessagesReducer(state, action) {
    switch(action.type) {
        case ADD_MESSAGE: {
            return {
                messages: [
                    ...state.messages,
                    action.message
                ]
            };
        }
        case REMOVE_MESSAGE: {
            const indexToToRemove = state.messages.indexOf(action.message);

            if (indexToToRemove >= 0) {
                return {
                    messages: [
                        ...state.messages.splice(indexToToRemove, indexToToRemove)
                    ]
                }
            } else {
                return state;
            }
        }

        default: {
            return state;
        }
    }
}

export const messagesInitialState = { messages: [] }

export const addMessage = message => {
    return {type: ADD_MESSAGE, message};
}

export const removeMessage = message => {
    return {type: REMOVE_MESSAGE, message};
}
