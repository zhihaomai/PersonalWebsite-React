/* Header
 * ---
 * This should be the view for the header
 */

var React = require('react');
var Router = require('react-router');

var Link = Router.Link;

var Header = React.createClass({

  componentWillMount: function() {
    var WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';
    window.addEventListener(WINDOW_CHANGE_EVENT, this._closeMenu);
  },

  _closeMenu: function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('open')) {
        toggleMenu();
    }
  },

  _toggleHorizontal: function() {
    [].forEach.call(
        document.getElementById('menu').querySelectorAll('.custom-can-transform'),
        function(el){
            el.classList.toggle('pure-menu-horizontal');
        }
    );
  },

  _toggleMenu: function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('open')) {
        setTimeout(this._toggleHorizontal, 500);
    }
    else {
        this._toggleHorizontal();
    }
    menu.classList.toggle('open');
    document.getElementById('toggle').classList.toggle('x');
  },

  render: function() {
    return (
      <div className="header">
        <div className="custom-wrapper pure-g" id="menu">
            <div className="pure-u-1 pure-u-md-1-3">
              <div className="pure-menu">
                <Link to="home">
                  <img className="logo" src="../pictures/logo.png"/>
                </Link>
                <div className="headerdesc">
                  CREATE OUR OWN PATH
                </div>
                <a className="custom-toggle" onClick={this._toggleMenu} id="toggle">
                  <s className="bar"></s><s className="bar"></s><s className="bar"></s>
                </a>
              </div>
            </div>
            <div className="pure-u-1 pure-u-md-2-3">
                <div className="pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform">
                    <ul className="pure-menu-list">
                      <li className="pure-menu-item wordbutton">
                        <Link to="home">HOME</Link>
                      </li>        
                      <li className="pure-menu-item wordbutton">
                        <Link to="team">TEAM</Link>
                      </li>
                      <li className="pure-menu-item wordbutton">
                        <Link to="contact">CONTACT</Link>
                      </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
  },
});

module.exports = Header;
