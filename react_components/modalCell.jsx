const React = require('react');

module.exports = React.createClass({
    /**
     * getInitialState() executes exactly once during the lifecycle of the component and sets up the initial state of the component.
     * @returns {{data: Array}}
     */
    getInitialState: function() {
        return {data: {}};
    },
    loadCommentsFromServer: function() {
    },
    handleClick: function (data) {
    },
    /**
     * componentDidMount is a method called automatically by React when a component is rendered.
     */
    componentDidMount: function() {
        this.loadCommentsFromServer();
    },
    render: function() {
        let title = (this.props && this.props.data) ? this.props.data.title : "";
        let thumbnail = (this.props && this.props.data && this.props.data.thumbnail) ? this.props.data.thumbnail : "";
        let description = (this.props && this.props.data && this.props.data.description) ? this.props.data.description : "";
        return (
            <div className="modal fade" id="basicModal" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title" id="myModalLabel">{title}</h4>
                    </div>
                    <div className="modal-body">
                        <h3>{description}</h3>
                        <img className="img-responsive" src={thumbnail} alt={description}  />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
            </div>
        );
    }
});
