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
              Internship Vlogs, GoPro Adventures, Life Moments
            </div>
            <a 
              className="pure-button bannerButton" 
              href="http://www.facebook.com/zhifilms">
              View Now
            </a>
          </div>
        </div>
      </div>
    );
  },

  componentWillMount: function() {
    !function(d,s,id) {
      var js, fjs=d.getElementsByTagName(s)[0];
      var p=/^http:/.test(d.location)?'http':'https';
      if(d.getElementById(id)) return;
      js=d.createElement(s);
      js.id=id;
      js.src=p+"://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js,fjs);
    }(document,"script","twitter-wjs");
  },

  componentWillUnmount: function() {
    !function(d,s,id) {
      var js = d.getElementById(id);
      if (js.parentNode) {
        js.parentNode.removeChild(js);
      }
    }(document,"script","twitter-wjs");
  },

  _renderNews: function() {
    return (
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-2-3 container">
          <div className="contentContainer">
            <iframe 
              src="https://www.google.com/maps/d/u/0/embed?mid=zfj9ky2F58qs.k7ZI_xWEzm8k" 
              width="100%" 
              height="100%"
              style={{border:0}}></iframe>
          </div>
        </div>
        <div className="pure-u-1 pure-u-md-1-3 container">
          <a className="twitter-timeline" data-widget-id="589509406125006848"></a>
        </div>
      </div>
    );
  },

  render: function() {
    return (
      <div className="homePage">
        <Header />
        <div className="content">
          {this._renderBanner()}
          {this._renderNews()}
        	<Footer />
        </div>
      </div>
    );
  },
});

module.exports = Home;
