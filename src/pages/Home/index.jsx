import React, { Component } from 'react';
import { Dialogs } from 'components';

import "./Home.scss"

class Home extends Component {

    render() {
        return (
            <section className="home">

                <Dialogs
                    userId={0}
                    item={[
                        {
                            message: {
                                text: "... и ходит кот на дубе том",
                                isRaded: false,
                                created_at: new Date(),
                                user: {
                                    _id: 1,
                                    fullname: "Александр Сергеевич Пушкин",
                                    avatar: null,
                                },
                            }
                        },
                        {
                            message: {
                                text: "... и ходитм",
                                isRaded: false,
                                created_at: new Date(),
                                user: {
                                    _id: 1,
                                    fullname: "Аттила",
                                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXXRvtaSUT6A6pmJSlynETzb4KWk1MVUKQsbORLdTScO7KG7-&s",
                                },
                            }
                        }
                    ]}
                />
                {/*<Message avatar="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"*/}
                {/*     user={{fullname: 'Mark'}}*/}
                {/*     text="Утька ты самая лучшая! Люблю тебя! Чмоки Чмоки! "*/}
                {/*     date="Tue Nov 19 2019 14:40:50"*/}
                {/*     isMe={false}*/}
                {/*     isReaded={true}*/}
                {/*     attachments={[*/}
                {/*         {*/}
                {/*             filename: 'image.jpg',*/}
                {/*             url: "https://source.unsplash.com/100x100/?random=1&nature,water"*/}
                {/*         },*/}
                {/*         {*/}
                {/*             filename: 'image.jpg',*/}
                {/*             url: "https://source.unsplash.com/100x100/?random=2&nature,water"*/}
                {/*         },*/}
                {/*         {*/}
                {/*             filename: 'image.jpg',*/}
                {/*             url: "https://source.unsplash.com/100x100/?random=3&nature,water"*/}
                {/*         }*/}
                {/*     ]}*/}
                {/*/>*/}
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