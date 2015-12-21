const React = require('react');
const Cell  = require("./cell.jsx");
const $     = require("jquery");
const characters  = require("./../data/characters");

module.exports = React.createClass({
    /**
     * getInitialState() executes exactly once during the lifecycle of the component and sets up the initial state of the component.
     * @returns {{data: Array}}
     */
    getInitialState: function() {
        return {data: characters.data.results};
    },
    loadCommentsFromServer: function() {
        //this.setState(characters.data.results);
    },
    /**
     * componentDidMount is a method called automatically by React when a component is rendered.
     */
    componentDidMount: function() {
        this.loadCommentsFromServer();
    },

    render: function() {
        let rows = [];
        const handler = this.props.showModalCell;
        this.state.data.forEach(function(heroe) {
            var thumbnail = heroe.thumbnail.path + "." + heroe.thumbnail.extension;
            var href = "#heroe/" + heroe.id;
            var urlDetails = heroe.urls[0].url;
            rows.push(<Cell title={heroe.name} description={heroe.description} thumbnail={thumbnail} href={urlDetails} showModalCell={handler}/>);
        });


        return (
            <div className="row">
                {rows}
            </div>
        );
    }
});
