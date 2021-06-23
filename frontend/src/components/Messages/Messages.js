import React, { useContext, useMemo } from 'react';
import { Container, Alert } from 'react-bootstrap'

import { MessagesContext } from '../../contexts/Messages';
const Messages = () => {

    const { messages, removeMessage, addMessage } = useContext(MessagesContext);

    const renderedMessages = useMemo(() => {
        return messages.map((message, id) => {
            return <Alert variant={message.type} key={id} className="d-flex justify-content-between">
                {message.text}
                <i className="bi bi-trash-fill" onClick={() => removeMessage(message)}></i>
            </Alert>
        });
    }, [messages, removeMessage]);

    return (
        <Container className="mt-4 mb-4">
            {renderedMessages}
        </Container>
    );
};

export default Messages;
