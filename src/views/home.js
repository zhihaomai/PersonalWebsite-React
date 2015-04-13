/* Home
 * ---
 * Initial page of website
 */

var React = require('react');

var Header = require('./header');
var Footer = require('./footer');

var Home = React.createClass({

  render: function() {
    return (
      <div className="homePage">
        <Header />
        <div className="content">
        	<div style={{height: 600}}></div>
        	<Footer />
        </div>
      </div>
    );
  },
});

module.exports = Home;
