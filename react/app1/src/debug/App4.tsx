import { useCallback } from "react"
import { of } from "rxjs"
import { bind, Subscribe } from "@react-rxjs/core"
import { createSignal } from "@react-rxjs/utils"
import { Input, Space } from 'antd';
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
        <div style={{ display: "flex", flexDirection: "row", width: '100%', height: "100%", border: "10px solid #555" }}>
            <div style={{ display: "flex", flex: 1, flexDirection: "column", backgroundColor: "gray", padding: 10 }}>
                <div>Chat Room</div>
                <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
                    <div style={{ display: "flex", flex: 1, flexDirection: "column", backgroundColor: "red" }}>
                        <h1>member</h1>
                        <Search placeholder="input search text" onSearch={onSearch} />
                        <div style={{ flex: 1, backgroundColor: "yellow", overflow: "auto" }}>
                            <div style={{ minHeight: "min-content" }}>
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
                    </div>
                    <div style={{ display: "flex", flex: 2, flexDirection: "column", backgroundColor: "blue" }}>
                        <div>田中大郎</div>
                        <div style={{ display: "flex", flex: 2, backgroundColor: "yellow" }}></div>
                        <div style={{ display: "flex", flex: 1, backgroundColor: "blue" }}></div>
                    </div>
                </div>
            </div>
        </div>
    </ThemeProvider>
}