/* Header
 * ---
 * This should be the view for our header
 */

var React = require('react');
var Router = require('react-router');
var Parse = require('../utils/parse');

var Link = Router.Link;

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <ul>
          <li className="wordbutton">
            <Link to="home">
              <img className="logo" src="../pictures/logo.png"/>
            </Link>
          </li>
          <li className="wordbutton">
            <Link to="home">Blog</Link>
          </li>
          <li className="wordbutton">
            <Link to="home">Videos</Link>
          </li>
          <li className="wordbutton">
            <Link to="home">Photos</Link>
          </li>
          <li className="wordbutton">
            <Link to="home">Contact</Link>
          </li>
          <li className="firstglyphbutton">
            <a href="http://www.youtube.com/zhihaomai">
              <i className="fa fa-youtube-square"></i>
            </a>
          </li>
          <li className="glyphbutton">
            <a href="http://www.twitter.com/zhihaomai">
              <i className="fa fa-twitter-square"></i>
            </a>
          </li>
          <li className="glyphbutton">
            <a href="http://www.github.com/zhihaomai">
              <i className="fa fa-github-square"></i>
            </a>
          </li>
          <li className="glyphbutton">
            <a href="https://ca.linkedin.com/pub/zhihao-mai/54/603/a91">
              <i className="fa fa-linkedin-square"></i>
            </a>
          </li>
          <li className="glyphbutton">
            <a href="http://www.instagram.com/zhihaomai">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li className="glyphbutton">
            <a href="http://www.facebook.com/zhihaomai">
              <i className="fa fa-facebook-square"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  },
});

module.exports = Header;
