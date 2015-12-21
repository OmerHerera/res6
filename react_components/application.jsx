var application = (function () {
    const React     = require('react');
    const ReactDOM  = require('react-dom');
    let Table       = require("./table.jsx");
    let ModalCell   = require("./modalCell.jsx");
    let instance;

    function createApplication() {
        let object = Object.assign(Object.create({}), {
            showModalCell (data) {
                ReactDOM.render(
                    <ModalCell  data={data} />, document.getElementById("modalContainer")
                );
            },
            start () {
                ReactDOM.render(
                    <Table showModalCell={this.showModalCell} />, document.getElementById("container")
                );
                this.showModalCell();
            }

        });
        return object;
    }

    return {
        getApplication: function () {
            if (!instance) {
                instance = createApplication();
            }
            return instance;
        }
    };
})();


let reactApp =  application.getApplication().start();
