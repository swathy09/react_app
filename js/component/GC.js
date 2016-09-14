var React=require('react');


var GC=React.createClass({

render:function()
{
console.log(" inside GC");
return(
<div>

<div>Title={this.props.Title}</div>

<div>IMDBid={this.props.imdbID}</div>

<div>Year={this.props.Year}</div>

<div><img src={this.props.Poster} /></div>

</div>
);
}
});

module.exports=GC;
