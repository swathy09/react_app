var React=require('react');
var $=require('../vendor/jquery');

var GC=React.createClass({

  getInitialState : function()
  {
   return({data :[]});
  },

  add : function()
  {
    $.ajax({
    type : 'POST',
   	cache:false,
   	dataType:'json',
    data: this.props.obj,
    url:'http://localhost:8080/movie/add' ,
   	success:function(data){
      console.log(data);
   	}.bind(this),
    error:function(xhr,status,err){
      this.setState({data:this.props.obj});
      console.error(this.props.url,status,err.toString());
    }.bind(this)
   });
 },

render:function()
{
return(
<div>

<div>Title={this.props.obj.Title}</div>

<div>IMDBid={this.props.obj.imdbID}</div>

<div>Year={this.props.obj.Year}</div>

<div><img src={this.props.obj.Poster} /></div>&nbsp;

<button type="button" className="btn btn-primary" onClick={this.add}>Add To Favourite</button>

</div>
);
}
});

module.exports=GC;
