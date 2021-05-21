import { of } from "rxjs"
import { map } from "rxjs/operators"
import { bind, Subscribe } from "@react-rxjs/core"
import { createSignal } from "@react-rxjs/utils"

type Member = {
    id: string,
}
const [useMemberList, _] = bind<Member[]>(of([{ id: "a" }, { id: "b" }, {id: "c"}]))


export default function () {
    const memberList = useMemberList()
    return <div style={{ display: "flex", flexDirection: "row", width: '100%', height: "100%", border: "10px solid #555" }}>
        <div style={{ display: "flex", flex: 1, flexDirection: "column", backgroundColor: "gray", padding: 10 }}>
            <div>Chat Room</div>
            <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
                <div style={{ display: "flex", flex: 1, flexDirection: "column", backgroundColor: "red" }}>
                    <div>member</div>
                    <input></input>
                    <div style={{ display: "flex", flex: 1, flexDirection: "column", backgroundColor: "yellow" }}>
                        {
                            memberList.map(member => {
                                return <div key={member.id} style={{ height: 100, border: "1px solid #f00" }}></div>
                            })
                        }
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
}