const { ThemeProvider, AgentBar, Avatar, Column, Title, Subtitle, Row, IconButton, RateBadIcon, RateGoodIcon } = require('@livechat/ui-kit')


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
    </ThemeProvider>
}
