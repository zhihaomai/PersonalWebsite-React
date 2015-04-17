/* Team Member Grid Item
 * ---------------------
 */

var React = require('react');

var Header = require('./header');
var Footer = require('./footer');

var TeamMember = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    src: React.PropTypes.string.isRequired,
    role: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
        <div className="memberContainer">
          <img className="memberPic" src={this.props.src}/>
          <div className="memberName">{this.props.name}</div>
          <div className="memberRole">{this.props.role}</div>
          <div className="memberDesc">{this.props.desc}</div>
        </div>
      </div>
    );
  },
});

module.exports = TeamMember;