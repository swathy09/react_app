var React=require('react');
var {Link}=require('react-router');
var NavLink=require('./NavLink');

var Navbar=React.createClass({

  render: function()
  {

    return(

      <div className="container" id="main">
      <div className="navbar navbar-fixed-top">
      <div className="nav-collapse collapse navbar-responsive-collapse">
       <ul className="nav navbar-nav">

        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/moviebox">Moviebox</NavLink></li>
        <li><NavLink to="/favmovie">Fav Movies</NavLink></li>
       </ul>
       </div>
       </div>
      </div>


    );
}
});

module.exports=Navbar;
