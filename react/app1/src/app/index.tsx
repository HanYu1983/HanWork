import { Subscribe } from "@react-rxjs/core"
import ChatPage from "./page/chat/index"
const { HashRouter, Route, Switch } = require("react-router-dom");

export default function () {
    return <Subscribe>
        <HashRouter>
            <Switch>
                <Route exact path="/">home</Route>
                <Route path="/chat"><ChatPage></ChatPage></Route>
            </Switch>
        </HashRouter>
    </Subscribe>
}