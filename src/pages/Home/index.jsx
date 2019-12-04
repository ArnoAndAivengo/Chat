import React, { Component } from 'react';
import { Icon, Input, Button } from 'antd';
import { Messages, Status, ChatInput } from 'components';
import { Dialogs } from 'containers';

import dialogsJSON from '../../utils/dialogs.json'

import "./Home.scss"

class Home extends Component {

    render() {
        return (
            <section className="home">
                <div className="chat">
                    <div className="chat__sidebar">
                        <div className="chat__sidebar-header">
                            <div>
                                <Icon type="team" />
                                <span>Список диалогов</span>
                            </div>
                            <Button shape="circle" type="link" icon="form"/>
                        </div>
                        <div className="chat__sidebar-dialogs">
                            <Dialogs
                                userId={0}
                                items={dialogsJSON}
                            />
                        </div>
                    </div>
                    <div className="chat__dialog">
                        <div className="chat__dialog-header">
                            <div  />
                            <div className="chat__dialog-header-center">
                                <b className="chat__dialog-header-username">Александр Пушкин</b>
                                <div className="chat__dialog-header-status">
                                    <Status online={true} />
                                </div>
                            </div>
                            <Button shape="circle" type="ellipsis" icon="ellipsis"/>
                        </div>
                        <div className="chat__dialog-messages">
                            <Messages />
                        </div>
                        <div className="chat__dialog-input">
                            <ChatInput />
                        </div>
                    </div>
                </div>
            </section>
        )
    };
}

export default Home;