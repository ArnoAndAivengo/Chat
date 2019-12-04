import React, { useState } from 'react';
import PropTypes from 'prop-types'
import {Button, Input} from 'antd';
import classNames from 'classnames';

import "./ChatInput.scss"

const ChatInput = (props) => {
    const [value, setValue] = useState('')
    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <Button shape="circle" type="link" icon="smile"/>
            </div>

            <Input onChange={e => setValue(e.target.value)} size="large" placeholder="Введите текст сообщения..."/>
            <div className="chat-input__actions">
                <Button shape="circle" type="link" icon="camera"/>
                {value ? <Button shape="circle" type="link" icon="check-circle"/>: <Button shape="circle" type="link" icon="audio"/>}

            </div>
        </div>
    )
};

ChatInput.propTypes = {
    className: PropTypes.string
};

export default ChatInput;