/* Footer
 * ------
 * This should be the view for the footer
 */

var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div className="footer">
        <div className="glyphbuttons">
          <a href="http://www.youtube.com/zhihaomai">
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="http://www.twitter.com/zhihaomai">
            <i className="fa fa-twitter-square"></i>
          </a>
          <a href="http://www.github.com/zhihaomai">
            <i className="fa fa-github-square"></i>
          </a>
          <a href="https://ca.linkedin.com/pub/zhihao-mai/54/603/a91">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="http://www.instagram.com/zhihaomai">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="http://www.facebook.com/zhihaomai">
            <i className="fa fa-facebook-square"></i>
          </a>
        </div>
        <div className="text">zhihao.z.mai@gmail.com</div>
        <div className="text">Copyright © 2015 Zhihao Mai. All Rights Reserved.</div>
      </div>
    );
  },
});

module.exports = Footer;