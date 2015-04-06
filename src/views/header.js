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
          <li><Link to="home">Landing</Link></li>
          <li><Link to="home">Campfire</Link></li>
        </ul>
      </div>
    );
  },
});

module.exports = Header;
