function programEditModule() {
    function createView() {
        function fillProgram(info) {
            for (let key in info) {
                let tag = $('#' + key)
                tag.val(info[key])
            }
        }
        return {
            fillProgram: fillProgram
        }
    }

    function createModel() {
        let modelChange = new rxjs.ReplaySubject();
        let model = {
            edit: {}
        }
        function editProgram(listModule, key) {
            let p = listModule.getProgram().filter(info => info.programTitle == key)[0]
            let copy = Object.assign(p, {})
            model.edit = copy
            modelChange.next(['onmodel_program_edit', copy])
        }
        function getEditProgram(){
            return model.edit;
        }
        return {
            editProgram,
            getEditProgram,
            modelChange
        }
    }

    function createController(model, view) {
        let onClickEdit = rxjs.combineLatest(
            input.pipe(
                rxjs.operators.filter(([name, _]) => { return name == "onclick_datatable_edit"; }),
                rxjs.operators.map(([name, [tableId, key]]) => key)
            ),
            // 取得getter物件
            input.pipe(
                rxjs.operators.filter(([name, _]) => { return name == "on_programListModule_create"; }),
                rxjs.operators.map(([name, [m]]) => m)
            )
        );
        onClickEdit.subscribe(([key, programListModule]) => {
            model.editProgram(programListModule, key)
        })


        let program_edit = model.modelChange.pipe(
            rxjs.operators.filter(([name, _]) => { return name == "onmodel_program_edit"; }),
            rxjs.operators.map(([name, info]) => info)
        );
        program_edit.subscribe(view.fillProgram)

        // 建立getter物件
        sendEvent("on_programEditModule_create", [
            {
                getEditProgram: model.getEditProgram
            }
        ])
    }
    createController(createModel(), createView())
}