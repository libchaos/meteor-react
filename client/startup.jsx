const {
  Router,
  Route,
  IndexRoute
} = ReactRouter;
const Routes = (
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="blog" component={Blog} />
      <Route path="/blog/:postName" component={Post} />
      <Route path="home" component={Home} />
      <IndexRoute component={Home} />
    </Route>
  );
const {createHistory} = History;

Meteor.startup(function() {
  ReactDOM.render((
    <Router history={createHistory()}>
      {Routes}
    </Router>
  ), document.getElementById("container"));
});
