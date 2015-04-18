/* Home Page
 * ---------
 * Initial page of website
 */

var React = require('react');

var Header = require('./header');
var Footer = require('./footer');

var Home = React.createClass({

  _renderBanner: function() {
    return (
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-1 bannerContainer">
          <img className="banner" src="../pictures/temp_banner.jpg"/>
          <div className="bannerText">
            <div style={{display: 'block'}} className="fa fa-play-circle"></div>
            <div>ZHI FILMS</div>
            <div className="bannerDesc">
              Internship Vlogs, GoPro Adventures, and Life Moments
            </div>
            <button className="pure-button bannerButton">Take A Glimpse</button>
          </div>
        </div>
        <div style={{height: 800}} className="pure-u-1 pure-u-md-1-1"></div>
      </div>
    );
  },

  render: function() {
    return (
      <div className="homePage">
        <Header />
        <div className="content">
          {this._renderBanner()}
        	<Footer />
        </div>
      </div>
    );
  },
});

module.exports = Home;
