import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Empty } from "antd"
import { Message } from 'components'

import "./Messages.scss";

const Messages = ({ items }) => {

    return items ? (<div>
        <Message
            avatar="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
            text="Hello World!"
            date={new Date()}
            isMe={false}
            isReaded={false}
            audio="https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3"
        />
        <Message avatar="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
                 user={{fullname: 'Anonimus'}}
                 text="Привет, Детка!"
                 date={new Date()}
                 isMe={false}
                 isReaded={false}
        />
        <Message avatar="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
                 user={{fullname: 'Anonimus'}}
                 text="Привет, Детка!"
                 date={new Date()}
                 isMe={false}
                 isReaded={false}
        />
        <Message avatar="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
                 user={{fullname: 'Anonimus'}}
                 text="Привет, Детка!"
                 date={new Date()}
                 isMe={false}
                 isReaded={false}
        />
        <Message avatar="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
                 user={{fullname: 'Anonimus'}}
                 text="Привет, Детка!"
                 date={new Date()}
                 isMe={false}
                 isReaded={false}
        />
        <Message avatar="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
                 user={{fullname: 'Anonimus'}}
                 text="Привет, Детка!"
                 date={new Date()}
                 isMe={false}
                 isReaded={false}
        />
        <Message avatar="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
                 user={{fullname: 'Anonimus'}}
                 text="Привет, Детка!"
                 date={new Date()}
                 isMe={false}
                 isReaded={false}
        />
        <Message avatar="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
                 user={{fullname: 'Anonimus'}}
                 text="Привет, Детка!"
                 date={new Date()}
                 isMe={false}
                 isReaded={false}
        />
        <Message avatar="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
                 user={{fullname: 'Anonimus'}}
                 text="Привет, Детка!"
                 date={new Date()}
                 isMe={false}
                 isReaded={false}
        />
        <Message avatar="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
                 user={{fullname: 'Anonimus'}}
                 text="Привет, Детка!"
                 date={new Date()}
                 isMe={false}
                 isReaded={false}
        />
        <Message avatar="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
                 user={{fullname: 'Anonimus'}}
                 text="Привет, Детка!"
                 date={new Date()}
                 isMe={false}
                 isReaded={false}
        />
        <Message avatar="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
                 user={{fullname: 'Anonimus'}}
                 text="Привет, Детка!"
                 date={new Date()}
                 isMe={false}
                 isReaded={false}
        />
        <Message avatar="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"
                 user={{fullname: 'Anonimus'}}
                 text="Привет, Детка!"
                 date={new Date()}
                 isMe={false}
                 isReaded={false}
        />

        <Message avatar="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
                 isMe={false}
                 text="Привет, Детка!"
                 date={new Date()}
                 isReaded={false}
                 attachments={[
                     {
                         filename: 'image.jpg',
                         url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                     },
                     {
                         filename: 'image.jpg',
                         url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                     },
                     {
                         filename: 'image.jpg',
                         url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                     }
                 ]}
        />
        <Message avatar="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
                 isMe={false}
                 isReaded={false}
                 isTyping
        />
    </div>) : <Empty description="Нету сообщений"/>
};

Messages.propTypes = {
    items: PropTypes.array
};

export default Messages;