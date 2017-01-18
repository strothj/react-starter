var React = require('react');
var ReactDOM = require('react-dom');

var Person = function() {
    var name = 'Derek Zoolander';
    var imageUrl = 'http://vignette3.wikia.nocookie.net/thegamesrp/images/0/00/Derek_zoolander.jpg/revision/latest?cb=20141123211249';
    var job = 'Male model';
    return (
        <div className="person">
            <div className="person-name">{name}</div>
            <img className="person-img" src={imageUrl} />
            <div className="person-job">
                {job}
            </div>
        </div>
    );
};

module.exports = Person;
