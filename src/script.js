// External dependencies
var React = require('react');
var Router = require('react-router');
var $ = require('jquery');

// Internal dependencies
var Home = require('./views/home.js');
var Team = require('./views/team.js');
var Contact = require('./views/contact.js');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <RouteHandler/>
    );
  },
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="team" path="/team" handler={Team} />
    <Route name="contact" path="/contact" handler={Contact} />
  </Route>
);

$(function() {
  Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
  });
});
