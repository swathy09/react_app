var React=require('react');


var navbar=React.createClass({

  render: function()
  {
    return(
      <div>
       <button >Home</button>
       <button>Search Movie</button>
      </div>
    );
  }
});

module.exports=navbar;
