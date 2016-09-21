var React= require('react');
var DisplayMovie=require('./DisplayMovie');
var $=require('../vendor/jquery');

var FavMovies=React.createClass({

  getInitialState : function()
  {
   return({data :[]});
  },

  componentDidMount : function()
  {
    $.ajax({
    type : 'GET',
   	cache:false,
   	dataType:'json',
    url:'http://localhost:8080/movie/display' ,
   	success:function(data1){
   	  this.setState({data:data1});
   	}.bind(this),
 });
 },

 render:function(){
 	return(
 		<DisplayMovie data3={this.state.data} />
 	);
 }
});

module.exports=FavMovies;
