var React=require('react');
var GC=require('./GC');

var Child2=React.createClass({
render:function()
{

var values=this.props.data1.map(function(asd){

return(
<GC Title={asd.Title} Year={asd.Year} imdbID={asd.imdbID} Poster={asd.Poster}/>
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
