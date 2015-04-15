/* Home
 * ---
 * Initial page of website
 */

var React = require('react');

var Header = require('./header');
var Footer = require('./footer');

var Home = React.createClass({

  componentWillMount: function() {
    (function(d, s, id) {  
      var js, fjs = d.getElementsByTagName(s)[0];  
      if (d.getElementById(id)) return;  
      js = d.createElement(s); js.id = id;  
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";  
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },

	_onClick: function() {
		console.log ("HEY");
	},

  render: function() {
    return (
      <div className="homePage">
        <Header />
        <div className="content">
          <div 
            style={{maxWidth: 1000, marginTop: 20, marginBottom: 20}} 
            className="fb-video" 
            data-allowfullscreen="true" 
            data-href="https://www.facebook.com/zhifilms/videos/1576962825903907/">
            <div className="fb-xfbml-parse-ignore">
            </div>
          </div>
        	<Footer />
        </div>
      </div>
    );
  },
});

module.exports = Home;
