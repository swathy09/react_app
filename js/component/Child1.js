var React=require('react');
var ReactDOM=require('react-dom');
var change="";

var Child1=React.createClass({

first:function(event)
{
  console.log(event.target.value);
  change=event.target.value;
},

handleClick:function()
{
 var URL="http://www.omdbapi.com/?s="+change;
 //console.log(URL);
 this.props.data(URL);
},

render:function()
{
return(

    <div >
    Enter movie name:<input type="text" onChange={this.first}  /> &nbsp; &nbsp; 
    <button type="button" className="btn btn-info" onClick={this.handleClick}>Search</button>
    </div>
);
}
});

module.exports=Child1;
