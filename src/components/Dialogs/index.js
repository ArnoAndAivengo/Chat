import React from 'react';
import classNames from 'classnames'

import { DialogItem } from '../'

import "./Dialogs.scss"

const Dialogs = ({ item, userId }) => (

    <div className="dialogs">
        {item.map(item => (
            <DialogItem
                key={item._id}
                user={item.message.user}
                message={item.message}
                unreaded={0}
                isMe={item.message.user._id === userId}
            />
        ))}
    </div>
);

export default Dialogs;