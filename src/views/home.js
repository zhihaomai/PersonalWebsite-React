/* Home
 * ---
 * Initial page of website
 */

var React = require('react');
var Header = require('./header');

var Home = React.createClass({

  render: function() {
    return (
      <div className="homePage">
        <Header />
        <img className="tempCenterpiece" src="../pictures/logo.png"/>
      </div>
    );
  },
});

module.exports = Home;
