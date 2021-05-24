import { useCallback } from "react"
import { of } from "rxjs"
import { bind, Subscribe } from "@react-rxjs/core"
import { createSignal } from "@react-rxjs/utils"
import { Input, Space } from 'antd';
import "antd/dist/antd.css"
import "./index.css"
const { MessageButton, MessageButtons, MessageTitle, MessageMedia, MessageList, MessageGroup, Message, MessageText, ThemeProvider, AgentBar, Avatar, Column, Title, Subtitle, Row, IconButton, RateBadIcon, RateGoodIcon } = require('@livechat/ui-kit')
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
                    <div className="dialogWindow">
                        <MessageList active>
                            <MessageGroup
                                avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
                                onlyFirstWithMeta
                            >
                                <Message authorName="Jon Smith" date="21:37" showMetaOnClick>
                                    <MessageMedia>
                                        <img src="https://static.staging.livechatinc.com/1520/P10B78E30V/dfd1830ebb68b4eefe6432d7ac2be2be/Cat-BusinessSidekick_Wallpapers.png" />
                                    </MessageMedia>
                                </Message>
                                <Message authorName="Jon Smith" date="21:37">
                                    <MessageTitle title="Message title" subtitle="24h" />
                                    <MessageMedia>
                                        <img src="https://static.staging.livechatinc.com/1520/P10B78E30V/dfd1830ebb68b4eefe6432d7ac2be2be/Cat-BusinessSidekick_Wallpapers.png" />
                                    </MessageMedia>
                                    <MessageText>
                                        The fastest way to help your customers - start chatting with visitors
        </MessageText>
                                    <MessageButtons>
                                        <MessageButton label="View more" primary />
                                        <MessageButton label="Cancel" />
                                    </MessageButtons>
                                    <MessageText>
                                        The fastest way to help your customers - start chatting with visitors
                                        who need your help using a free 30-day trial.
        </MessageText>
                                    <MessageButtons>
                                        <MessageButton label="View more" primary />
                                        <MessageButton label="Cancel" />
                                    </MessageButtons>
                                </Message>
                                <Message date="21:38" authorName="Jon Smith">
                                    <MessageText>Hi! I would like to buy those shoes</MessageText>
                                </Message>
                            </MessageGroup>
                            <MessageGroup onlyFirstWithMeta>
                                <Message date="21:38" isOwn={true} authorName="Visitor">
                                    <MessageText>
                                        I love them
                                        sooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
                                        much!
        </MessageText>
                                </Message>
                                <Message date="21:38" isOwn={true} authorName="Visitor">
                                    <MessageText>This helps me a lot</MessageText>
                                </Message>
                            </MessageGroup>
                            <MessageGroup
                                avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
                                onlyFirstWithMeta
                            >
                                <Message authorName="Jon Smith" date="21:37">
                                    <MessageText>No problem!</MessageText>
                                </Message>
                                <Message
                                    authorName="Jon Smith"
                                    imageUrl="https://static.staging.livechatinc.com/1520/P10B78E30V/dfd1830ebb68b4eefe6432d7ac2be2be/Cat-BusinessSidekick_Wallpapers.png"
                                    date="21:39"
                                >
                                    <MessageText>
                                        The fastest way to help your customers - start chatting with visitors
                                        who need your help using a free 30-day trial.
        </MessageText>
                                </Message>
                                <Message authorName="Jon Smith" date="21:39">
                                    <MessageMedia>
                                        <img src="https://static.staging.livechatinc.com/1520/P10B78E30V/dfd1830ebb68b4eefe6432d7ac2be2be/Cat-BusinessSidekick_Wallpapers.png" />
                                    </MessageMedia>
                                </Message>
                            </MessageGroup>
                        </MessageList>
                    </div>
                    <div className="messageWindow"></div>
                </div>
            </div>
        </div>
    </ThemeProvider>
}

export { }