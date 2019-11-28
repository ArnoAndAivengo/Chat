import React from 'react';
import classNames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'

import { MessageStatus } from '../'

import "./DialogItem.scss"
// <Time date={message.created_at} />
const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(created_at, 'HH:mm')
    } else {
        return format(created_at, 'DD.MM.YYYY')
    }
};

const getAvatar = avatar => {
    if ( avatar ) {
        return (
            <img src="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
                 alt=""
            />
        )
    } else {
       //
    }
};

const DialogItem = ({ user, message, unreaded, isMe }) =>
    <div className={classNames("dialogs__item", {
        "dialogs__item--online": user.isOnline
    })}>
        <div className="dialogs__item-avatar">
            {/*<img src={user.avatar} alt={`${user.fullname} avatar`}/>*/}
            { getAvatar(user.avatar) }

        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>Алесандр Пушкин</b>
                <span>
                    {getMessageTime(message.created_at)}
                </span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>
                    {message.text}
                </p>
                {isMe && <MessageStatus isMe={true} isReaded={false} />}
                {unreaded > 0 && (
                    <div className="dialogs__item-info-bottom-count">{ unreaded > 9 ? "+9" : unreaded}</div>
                )}
            </div>

        </div>
    </div>;

export default DialogItem;