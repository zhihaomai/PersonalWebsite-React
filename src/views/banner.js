var React = require('react');

var Banner = React.createClass({

  propTypes: {
   	imgSrc: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string.isRequired,
    bannerTitle: React.PropTypes.string.isRequired,
    bannerDesc: React.PropTypes.string.isRequired,
    showBtn: React.PropTypes.bool.isRequired,
  },

  render: function() {
  	if (this.props.showBtn) {
  		var button = (
				<a 
	        className="pure-button bannerButton" 
	        href="http://www.facebook.com/zhifilms">
	        View Now
	      </a>
	  	);
	  }

    return (
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-1 bannerContainer">
          <img className="banner" src={this.props.imgSrc}/>
          <div className="bannerText">
            <div style={{display: 'block'}} className={this.props.icon}></div>
            <div>{this.props.bannerTitle}</div>
            <div className="bannerDesc">{this.props.bannerDesc}</div>
            {button}
          </div>
        </div>
      </div>
    );
  },
});

module.exports = Banner;
