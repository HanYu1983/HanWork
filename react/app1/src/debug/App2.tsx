const { MessageGroup, Message, MessageText, ThemeProvider, AgentBar, Avatar, Column, Title, Subtitle, Row, IconButton, RateBadIcon, RateGoodIcon } = require('@livechat/ui-kit')


export default function () {
    return <ThemeProvider>
        <AgentBar>
            <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
            <Column fill>
                <Title>{'Jon Snow'}</Title>
                <Subtitle>{'Support hero'}</Subtitle>
            </Column>
            <Row>
                <Column>
                    <IconButton>
                        <RateBadIcon />
                    </IconButton>
                </Column>
                <Column>
                    <IconButton>
                        <RateGoodIcon />
                    </IconButton>
                </Column>
            </Row>
        </AgentBar>

        <MessageGroup
            avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
            onlyFirstWithMeta
        >
            <Message authorName="Jon Smith" date="21:37">
                <MessageText>Hey my friend!</MessageText>
            </Message>
            <Message authorName="Jon Smith" date="21:37">
                <MessageText>Hi!</MessageText>
            </Message>
            <Message authorName="Jon Smith" date="21:37">
                <MessageText>Hello, are you there?</MessageText>
            </Message>
        </MessageGroup>
    </ThemeProvider>
}
