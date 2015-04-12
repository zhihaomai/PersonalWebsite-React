/* Header
 * ---
 * This should be the view for the header
 */

var React = require('react');
var Router = require('react-router');

var Link = Router.Link;

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <ul style={{float: "left", height: 60}}>
          <li className="wordbutton">
            <Link to="home">
              <img className="logo" src="../pictures/logo.png"/>
            </Link>
          </li>
          <li className="headerdesc">
            FOLLOW YOUR OWN PATH
          </li>
        </ul>
        <ul style={{float: "right"}}>
          <li className="wordbutton">
            <Link to="home">BLOG</Link>
          </li>
          <li className="wordbutton">
            <Link to="home">FILM</Link>
          </li>
          <li className="wordbutton">
            <Link to="home">PHOTOS</Link>
          </li>
          <li className="wordbutton">
            <Link to="home">CONTACT</Link>
          </li>
        </ul>
      </div>
    );
  },
});

module.exports = Header;
