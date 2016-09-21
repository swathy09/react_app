var React=require('react');
var ReactDOM=require('react-dom');
var Child1=require('./Child1');
var Child2=require('./Child2');
var $=require('../vendor/jquery');

var MainComponent=React.createClass({

getInitialState : function()
{
 return({stateData:[]});
},

search:function(URL)
{
 $.ajax({
	cache:false,
	dataType: 'json',
	url:URL,
	success:function(response){
	  this.setState({stateData:response.Search});
	}.bind(this)
});
},

render:function()
{
return(
<div>
<Child1 data={this.search} />
<Child2 data1={this.state.stateData} />
</div>
);
}
});

module.exports=MainComponent;
