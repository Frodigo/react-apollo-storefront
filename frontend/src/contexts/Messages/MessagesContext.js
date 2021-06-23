import React, { createContext, useReducer } from 'react';
import {
    MessagesReducer,
    messagesInitialState,
    addMessage as addMessageAction,
    removeMessage as removeMessageAction
 } from '../../reducers/Messages';

export const MessagesContext = createContext();

export const MessagesProvider = ({ children }) => {
    const [{ messages }, dispatch ] = useReducer(MessagesReducer, messagesInitialState);

    const removeMessage = message => dispatch(removeMessageAction(message));
    const addMessage = message => dispatch(addMessageAction(message));

    return <MessagesContext.Provider value={{
        messages,
        addMessage,
        removeMessage
    }}>
        {children}
    </MessagesContext.Provider>
};
