var React=require('react');
var GC=require('./GC');

var Child2=React.createClass({
render:function()
{
	var values=this.props.data1.map(function(asd){
	return(
		<GC obj={asd} />
	);
});

return(
<div>
	{values}
</div>
);

}
});

module.exports=Child2;
