// External dependencies
var $ = require('jquery');
var React = require('react');
var Router = require('react-router');

// Internal dependencies
var Home = require('./views/home.js');
var Team = require('./views/team.js');
var Store = require('./views/store.js');

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
    <Route name="store" path="/store" handler={Store} />
    <Route name="team" path="/team" handler={Team} />
  </Route>
);

$(function() {
  Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
  });
});
