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
      </div>
    );
  },
});

module.exports = Home;
