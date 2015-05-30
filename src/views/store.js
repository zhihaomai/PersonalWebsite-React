/* Contact Page
 * ------------
 */

var React = require('react');

var Header = require('./header');
var Banner = require('./banner');
var Footer = require('./footer');

var Store = React.createClass({

  _renderBanner: function() {
    return (
      <Banner
        imgSrc="../pictures/store_banner.jpg"
        icon="fa fa-shopping-cart"
        bannerTitle="THE STORE"
        bannerDesc="Your official source for Zhi Films Merchandise, Apparel, and Collectibles. Be a part of the team today!"
        showBtn={false} />
    );
  },

  _renderStoreItems: function() {
    return (
      <div className="pure-g items">
        {this._renderStoreItem(
          "../pictures/store/white_tshirt_design.png",
          "Unisex Premium T (White)",
          "$9.99 US + Tax"
        )}
        {this._renderStoreItem(
          "../pictures/store/black_tshirt_design.png",
          "Unisex Premium T (Black)",
          "$9.99 US + Tax"
        )}
        {this._renderStoreItem(
          "../pictures/store/gray_sweater_design.png",
          "Unisex Hoodie (Gray)",
          "$15.99 US + Tax"
        )}
      </div>
    );
  },

  _renderStoreItem: function(imgSrc, desc, price) {
    return (
      <div className="pure-u-1-1 pure-u-md-1-3 item">
        <div className="content">
          <img src={imgSrc} width="100%" />
          <div className="desc">{desc}</div>
          <div className="price">{price}</div>
          <div className="action">Coming Soon</div>
        </div>
      </div>
    );
  },

  render: function() {
    return (
      <div className="storePage">
        <Header />
        <div className="content">
          {this._renderBanner()}
          {this._renderStoreItems()}
        	<Footer />
        </div>
      </div>
    );
  },
});

module.exports = Store;