import React from "react";
import { MessagesListType } from "../../types";
import { Message } from "../Message";

export const MessagesList: React.FC<MessagesListType> = (props) => {
    const { items, handleDeleteMessage } = props;
    return <>{items.map((item) => (<Message message={item} handleDeleteMessage={handleDeleteMessage} text={item.text} author={item.author} key={item.id} />))}
    </>
};

