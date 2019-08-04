function programListModule() {
    function createModel() {
        let modelChange = new rxjs.ReplaySubject();
        let model = {
            program: [
                {
                    programTitle: "han",
                    master: "master",
                    date: "date",
                    duration: "duration",
                    repeatSchedule: "repeatSchedule",
                    gamingPlatform: "gamingPlatform"
                },
                {
                    programTitle: "vic",
                    master: "master",
                    date: "date",
                    duration: "duration",
                    repeatSchedule: "repeatSchedule",
                    gamingPlatform: "gamingPlatform"
                }
                ,
                {
                    programTitle: "vic",
                    master: "master",
                    date: "date",
                    duration: "duration",
                    repeatSchedule: "repeatSchedule",
                    gamingPlatform: "gamingPlatform"
                }
            ]
        }

        function changeAttr(key, value) {
            model.edit[key] = value
        }

        function addProgram(info) {
            let copy = Object.assign(info, {})
            copy.duration = "xxx"
            model.program.push(copy)
            modelChange.next(['onmodel_program_add', [copy]])
        }

        function remove(key) {
            let nextProgram = model.program.filter(info => info.programTitle != key)
            model.program = nextProgram;
            modelChange.next(['onmodel_program_remove', key])
        }

        function getProgram() {
            return model.program.slice()
        }

        modelChange.next(['onmodel_program_add', model.program])

        return {
            changeAttr,
            addProgram,
            modelChange,
            remove,
            getProgram
        }
    }

    function createController(model) {
        // datatable
        let list_delete = input.pipe(
            rxjs.operators.filter(([name, _]) => { return name == "onclick_datatable_delete"; }),
            rxjs.operators.map(([name, [tableId, key]]) => key)
        );
        list_delete.subscribe(model.remove);

        let on_programEditModule_create = input.pipe(
            rxjs.operators.filter(([name, _]) => { return name == "on_programEditModule_create"; }),
            rxjs.operators.map(([name, [m]]) => m)
        );

        let clickSubmit = on_programEditModule_create.pipe(
            rxjs.operators.mergeMap(editModule => {
                return input.pipe(
                    rxjs.operators.filter(([name]) => { return name == "onclick_submit" }),
                    rxjs.operators.mapTo(editModule)
                );
            })
        )
        clickSubmit.subscribe((editModule) => {
            model.addProgram(editModule.getEditProgram());
        })

        // 要取得這個module的資料必須發送純getter物件(不得有setter)
        // 要改變這個module的資料只能透過事件
        sendEvent("on_programListModule_create", [{
            getProgram: model.getProgram,
            onChange: model.modelChange
        }])
        
    }

    createController(createModel())
}