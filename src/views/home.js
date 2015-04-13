/* Home
 * ---
 * Initial page of website
 */

var React = require('react');

var Header = require('./header');
var Footer = require('./footer');

var Home = React.createClass({

	_onClick: function() {
		console.log ("HEY");
	},

  render: function() {
    return (
      <div className="homePage">
        <Header />
        <div className="content">
        	<video className="video" width="100%" onClick={this._onClick} autoplay="autoplay">
  					<source src="https://fbcdn-video-p-a.akamaihd.net/hvideo-ak-xpf1/v/t43.1792-2/10474718_1576963292570527_792381358_n.mp4?efg=eyJxZSI6ImZiY2RuX3ZpZGVvX3JhdGVsaW1pdF9yb2xsb3V0Mix2X3JvbGxvdXQiLCJ2ZW5jb2RlX3RhZyI6ImxlZ2FjeV9oZCJ9&oh=946d9ecdea8cd0f7bf05e29341090cd3&oe=552B7367&__gda__=1428909664_895d8166d9d461724f8ad5b963097b1f" type="video/mp4"></source>
					</video>
        	<Footer />
        </div>
      </div>
    );
  },
});

module.exports = Home;
