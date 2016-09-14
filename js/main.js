var React=require('react');
var ReactDOM=require('react-dom');
var Child1=require('./component/Child1');
var Child2=require('./component/Child2');
var navbar=require('./component/navbar')
var $=require('./vendor/jquery')

var Navbar=React.createClass({
  render:function()
  {
    return(
      <div>
      <navbar />
      </div>
    );
  }
})

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

ReactDOM.render(<Navbar />,document.getElementById('nav'));
ReactDOM.render(<MainComponent />,document.getElementById('app'));
