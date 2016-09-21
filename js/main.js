var React=require('react');
var ReactDOM=require('react-dom');
var { hashHistory, Route, Router, IndexRoute }=require('react-router');
var Home=require('./component/Home');
var Navbar=require('./component/Navbar');
var Moviebox=require('./component/Moviebox');
//var About=require('./component/About');
var Favmovie=require('./component/FavMovies');

var MainComp=React.createClass({
  render:function()
  {
    return(
      <div>
      <Navbar />
      {this.props.children}
      </div>
    );
  }});

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={MainComp} >
       <IndexRoute component={Home} />
       <Route path="/home" component={Home} />
       <Route path="/moviebox" component={Moviebox} />
       <Route path="/favmovie" component={Favmovie} />
      </Route>
      {/*Comment*/}
  </Router>,document.getElementById('app'));
