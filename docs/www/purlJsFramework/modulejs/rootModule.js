function rootModule() {

    function createView() {
        function openPopup(type, des) {
            console.log("openPopup")
        }

        function initDatePicker(dom) {
            $(dom).datepicker()
        }

        let pages = [];
        function initPage(dom) {
            pages.push(dom)
        }

        function openPage(id) {
            for (let i = 0; i < pages.length; ++i) {
                let page = $(pages[i]);
                if (page.attr("id") == id) {
                    page.removeClass("displayNone")
                    page.addClass("displayBlock")
                } else {
                    page.removeClass("displayBlock")
                    page.addClass("displayNone")
                }
            }
        }

        let datatable = {};
        function initDataTable(dom) {
            let id = $(dom).attr("id")
            let table = $(dom).DataTable({
                data: [],
                columns: [
                    { data: "programTitle" },
                    { data: "master" },
                    { data: "date" },
                    { data: "duration" },
                    { data: "repeatSchedule" },
                    { data: "gamingPlatform" },
                    {
                        data: "function",
                        render: function (data, type, row) {
                            let innerHtml = [
                                `<button type=\"button\" class=\"btn btn-primary\" onclick=\"sendEvent('onclick_datatable_edit',['${id}', '${row.programTitle}'])\">編輯</button>`,
                                `<button type=\"button\" class=\"btn btn-primary\" onclick=\"sendEvent('onclick_datatable_delete',['${id}', '${row.programTitle}'])\">刪除</button>`
                            ];
                            return innerHtml.join("")
                        }
                    }
                ]
            });
            datatable[id] = table;
        }

        function addProgram(id, infos) {
            let table = datatable[id];
            if (table == null) {
                return;
            }
            table.rows.add(infos).draw()
        }

        function deleteProgram(id, key) {
            let table = datatable[id];
            if (table == null) {
                return;
            }
            let idx = table.column(0).data().indexOf(key);
            table.rows(idx).remove().draw(0)
        }

        return {
            openPage,
            openPopup,
            addProgram,
            deleteProgram,
            initPage,
            initDatePicker,
            initDataTable
        }
    }



    function createController(view) {
        // ======================== //
        // init component
        // ======================== //
        let onloadDatepicker = input.pipe(
            rxjs.operators.filter(([name, [type, dom]]) => { return name == "onload" && type == "datepicker"; }),
            rxjs.operators.map(([name, [type, dom]]) => dom)
        )
        onloadDatepicker.subscribe(view.initDatePicker)

        let onloadPage = input.pipe(
            rxjs.operators.filter(([name, [type, dom]]) => { return name == "onload" && type == "page"; }),
            rxjs.operators.map(([name, [type, dom]]) => dom)
        )
        onloadPage.subscribe(view.initPage)

        let onloadDatatable = input.pipe(
            rxjs.operators.filter(([name, [type, dom]]) => { return name == "onload" && type == "datatable"; }),
            rxjs.operators.map(([name, [type, dom]]) => dom)
        )
        onloadDatatable.subscribe(view.initDataTable)


        // ======================== //
        // event
        // ======================== //
        // route
        let hashChange = input.pipe(
            rxjs.operators.filter(([name, _]) => { return name == "onhashChange"; }),
            rxjs.operators.map(([name, [hash]]) => hash)
        );
        hashChange.subscribe(view.openPage)


        let on_programListModule_create = input.pipe(
            rxjs.operators.filter(([name, _]) => { return name == "on_programListModule_create"; }),
            rxjs.operators.map(([name, [m]]) => m)
        );

        let program_add = on_programListModule_create.pipe(
            rxjs.operators.mergeMap(m => {
                return m.onChange.pipe(
                    rxjs.operators.filter(([name, _]) => { return name == "onmodel_program_add"; }),
                    rxjs.operators.map(([name, infos]) => infos)
                );
            })
        )
        program_add.subscribe((infos) => {
            view.addProgram("datatable_program", infos);
        })


        let program_remove = on_programListModule_create.pipe(
            rxjs.operators.mergeMap(m => {
                return m.onChange.pipe(
                    rxjs.operators.filter(([name, _]) => { return name == "onmodel_program_remove"; }),
                    rxjs.operators.map(([name, key]) => key)
                );
            })
        )
        program_remove.subscribe((key) => {
            view.deleteProgram("datatable_program", key);
        });


        let onclick_datatable_edit = input.pipe(
            rxjs.operators.filter(([name, _]) => { return name == "onclick_datatable_edit"; }),
            rxjs.operators.map(([name, [tableId, key]]) => key)
        );
        onclick_datatable_edit.subscribe(()=>{
            view.openPage('page_add')
        })
        


        let logger = on_programListModule_create.pipe(
            rxjs.operators.mergeMap(m => {
                return rxjs.merge(input, m.onChange);
            })
        )
        logger.subscribe(([name, arg]) => {
            console.log(name, arg)
        });

        // start page
        view.openPage('page_list')
    }

    createController(createView())
}