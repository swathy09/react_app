var React=require('react');
var DisplayFav= require('./DisplayFav');

 var DisplayMovie=React.createClass({
 render:function()
 {
 	var values1=this.props.data3.map(function(asd){
 	return(
 		<DisplayFav obj={asd} />
 	);
 });

 return(
 <div>
 	{values1}
 </div>
 );

 }
 });
module.exports=DisplayMovie;
