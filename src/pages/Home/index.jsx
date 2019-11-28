import React, { Component } from 'react';
import { Message, Dialogs  } from 'components';

import "./Home.scss"

class Home extends Component {

    render() {
        return (
            <section className="home">

                <Dialogs
                    userId={0}
                    items={[
                        {
                            message: {
                                _id: "d95b2b8d46ebc680284bb1e90692f8d4",
                                text: "... и ходит кот на дубе том",
                                isReaded: false,
                                created_at: new Date(),
                                user: {
                                    _id: "d95b2b8d46ebc680284bb1e90692f8d4",
                                    fullname: "Александр Сергеевич Пушкин",
                                    isOnline: false,
                                    avatar: "http://b1.filmpro.ru/c/278960.700xp.jpg",
                                },
                            }
                        },
                        {
                            message: {
                                _id: "d95b2b8d46ebc680284bb1e90692f8d4",
                                text: "... и ходитм",
                                isReaded: false,
                                created_at: new Date(),
                                user: {
                                    _id: "Attila",
                                    fullname: "Attila",
                                    isOnline: true,
                                    avatar: false,
                                },
                            }
                        }
                    ]}
                />
                <Message
                    avatar="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
                    date={new Date()}
                    isMe={false}
                    isReaded={false}
                    audio="https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3"
                />
                {/*<Message avatar="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"*/}
                {/*         user={{fullname: 'Anonimus'}}*/}
                {/*         text="Привет, Детка!"*/}
                {/*         date="Tue Nov 19 2019 16:40:50"*/}
                {/*         isMe={true}*/}
                {/*         isReaded={false}*/}
                {/*/>*/}
                {/*<Message avatar="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"*/}
                {/*         attachments={[*/}
                {/*             {*/}
                {/*                 filename: 'image.jpg',*/}
                {/*                 url: "https://source.unsplash.com/100x100/?random=1&nature,water"*/}
                {/*             }*/}
                {/*         ]}*/}
                {/*/>*/}
                {/*<Message avatar="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"*/}
                {/*         isTyping*/}
                {/*/>*/}
            </section>
        )
    };
}

export default Home;