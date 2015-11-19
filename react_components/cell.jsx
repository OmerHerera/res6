const React = require('react');
const $     = require("jquery");

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
    /**
     * componentDidMount is a method called automatically by React when a component is rendered.
     */
    componentDidMount: function() {
        this.loadCommentsFromServer();
        this.setState(this.props);
    },
    onShowModal: function (e) {
        e.preventDefault();
        this.props.showModalCell(this.props);
        return;
    },
    render: function() {
        return (
            <div className="col-md-4">
                <h2>{this.props.title}</h2>
                <img className="img-responsive" src={this.props.thumbnail} alt={this.props.description}  />
                <p>{this.props.description}</p>
                <span>
                    <a className="btn btn-primary" href={this.props.href} role="button">View details »</a>
                    <a href="#" className="btn btn-success" data-toggle="modal" data-target="#basicModal" onClick={this.onShowModal}>Picture »</a>
                </span>
            </div>
        );
    }
});
