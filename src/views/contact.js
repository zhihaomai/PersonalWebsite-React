/* Contact Page
 * ------------
 */

var React = require('react');

var Header = require('./header');
var Footer = require('./footer');

var Contact = React.createClass({

  render: function() {
    return (
      <div className="contactPage">
        <Header />
        <div className="content">
        	<Footer />
        </div>
      </div>
    );
  },
});

module.exports = Contact;