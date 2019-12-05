import React from 'react'
import PropTypes from 'prop-types'
import { Empty, Spin, Alert } from "antd"
import { Message } from 'components'
import className from 'classnames'

import "./Messages.scss";

const Messages = ({ blockRef, isLoading, items }) => {

    return (
        <div ref={blockRef}
             className={className("messages", { "messages--loading": isLoading })}
        >
            {isLoading ? (
                <Spin tip="Загрузка сообщений..." />
            ) : items && !isLoading ?  (
                items.length > 0 ? (
                    items.map(item => <Message key={item._id} {...item} />)
            ) : (
                <Empty description="Диалог пуст"/>
                )
            ) : (
                <Empty description="Откройте диалог"/>
            )}
        </div>
    )
};

Messages.propTypes = {
    items: PropTypes.array
};

export default Messages;