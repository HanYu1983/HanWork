import { useCallback } from "react"
import { of } from "rxjs"
import { bind, Subscribe } from "@react-rxjs/core"
import { createSignal } from "@react-rxjs/utils"
import { Input, Space } from 'antd';
import "./index.css"
const { MessageGroup, Message, MessageText, ThemeProvider, AgentBar, Avatar, Column, Title, Subtitle, Row, IconButton, RateBadIcon, RateGoodIcon } = require('@livechat/ui-kit')
const { Search } = Input;

type Member = {
    id: string,
    imageUrl: string,
    title: string,
    subtitle: string,
}
const [useMemberList, _] = bind<Member[]>(of([
    {
        id: "a",
        imageUrl: "https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg",
        title: "a",
        subtitle: "a"
    },
    {
        id: "b",
        imageUrl: "https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg",
        title: "b",
        subtitle: "b"
    },
    {
        id: "c",
        imageUrl: "https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg",
        title: "c",
        subtitle: "c"
    }
]))

export default function () {
    const memberList = useMemberList()
    const onSearch = useCallback(() => {

    }, [])
    return <ThemeProvider>
        <div className="chatPage">
            <h1>ChatRoom</h1>
            <div className="center">
                <div className="left">
                    <h1>Member List</h1>
                    <Search placeholder="input search text" onSearch={onSearch} />
                    <div className="memberList">
                        {
                            memberList.map(member => {
                                return <AgentBar key={member.id} style={{ height: 300 }}>
                                    <Avatar imgUrl={member.imageUrl} />
                                    <Column>
                                        <Title>{member.title}</Title>
                                        <Subtitle>{member.subtitle}</Subtitle>
                                    </Column>
                                </AgentBar>
                            })
                        }
                    </div>
                </div>
                <div className="right">
                    <div className="dialogWindow"></div>
                    <div className="messageWindow"></div>
                </div>
            </div>
        </div>
    </ThemeProvider>
}

export {}