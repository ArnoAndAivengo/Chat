import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { UploadField } from '@navjobs/upload'
import {Button, Input} from 'antd';
import { Picker } from 'emoji-mart'

import "./ChatInput.scss"

const ChatInput = (props) => {
    const [value, setValue] = useState('');
    const [emojiPickerVisible, setShowEmojiPicker] = useState(false);

    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                { emojiPickerVisible && (<div className="chat-input__emoji-picker">
                    <Picker set='emojione' onClick={(emoji, event) => console.log(emoji.native)}/>
                </div>)}
                <Button onClick={() => setShowEmojiPicker(!emojiPickerVisible)} shape="circle" type="link" icon="smile"/>
            </div>

            <Input onChange={e => setValue(e.target.value)} size="large" placeholder="Введите текст сообщения..."/>
            <div className="chat-input__actions">

                <UploadField
                    onFiles={files => console.log(files)}
                    containerProps={{
                        className: 'chat-input__actions-upload-btn'
                    }}
                    uploadProps={{
                        accept: '.jpg,.jpeg,.png,.gif,.bmp',
                        multiple: "multiple"
                    }}

                >
                    <Button shape="circle" type="link" icon="camera"/>
                </UploadField>

                {value ? <Button shape="circle" type="link" icon="check-circle"/>: <Button shape="circle" type="link" icon="audio"/>}

            </div>
        </div>
    )
};

ChatInput.propTypes = {
    className: PropTypes.string
};

export default ChatInput;