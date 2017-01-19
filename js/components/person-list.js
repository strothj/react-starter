var React = require('react');
var ReactDOM = require('react-dom');

var Person = require('./person');

var PersonList = React.createClass({
    render: function() {
        return (
            <div className="person-list">
                <Person name="Derek Zoolander"
                    imageUrl="http://vignette3.wikia.nocookie.net/thegamesrp/images/0/00/Derek_zoolander.jpg/revision/latest?cb=20141123211249"
                    job="Male model" />
                <Person name="Donald Knuth"
                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever chap" />
            </div>
        );
    }
});

module.exports = PersonList;
