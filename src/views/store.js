/* Contact Page
 * ------------
 */

var React = require('react');

var Header = require('./header');
var Footer = require('./footer');

var Store = React.createClass({

  render: function() {
    return (
      <div className="storePage">
        <Header />
        <div className="content">
        	<Footer />
        </div>
      </div>
    );
  },
});

module.exports = Store;