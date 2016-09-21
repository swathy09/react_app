var React=require('react');
var ReactDOM=require('react-dom');
var $=require('../vendor/jquery');
var x="";
var DisplayFav=React.createClass({

  getInitialState : function()
  {
   return({data : "#"+this.props.obj.imdbID});
  },

  filmName:function(event)
  {
    x=event.target.value;
    this.props.obj.Title=x;
  },

  delete:function()
  {
    $.ajax({
      url: "http://localhost:8080/movie/delete",
      dataType: 'json',
      type: 'DELETE',
      data: this.props.obj,
      success: function() {
         console.log('success');
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
  },

  update:function()
  {
     $.ajax({
      url:"http://localhost:8080/movie/update",
      dataType: 'json',
      type: 'PUT',
      data: this.props.obj,
      success: function() {
        console.log("success");
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url1, status, err.toString());
      }.bind(this)
    });
  },


render:function(){

  return(
    <div className="content">
    <br/><br/><br/>
     <div className="row" >
          <div className="col-sm-3">
            <div className="thumbnail">
            <img src={this.props.obj.Poster} alt="image"/>

             </div>
          </div>
          <div className="col-sm-9">
            <div className="list-group">
              <h2 className="list-group-item-text">Movie Title :{this.props.obj.Title}</h2>
              <h3 className="list-group-item-text">Year:{this.props.obj.Year}</h3>
              <h3 className="list-group-item-text">Id:{this.props.obj.imdbID}</h3>

              <button type="submit" className="btn btn-danger" onClick={this.delete}>Delete</button>&nbsp; &nbsp;

              <a href={this.state.data} role="button" className="btn btn-warning" data-toggle="modal">Update</a>

            </div>
         </div>
      </div>
      <div className="modal fade" id={this.props.obj.imdbID}>
      <div className="modal-dialog">
      <div className="modal-content">
      <div className="modal-header">
      <button className="close" data-dismiss="modal">&times;</button>

      <h4 className="modal-title">Update</h4>
      </div>
      <div className="modal-body">


      <form className="form-horizontal">
      <div className="form-group">
      <label className="col-lg-2 control-label" for="inputName">Title</label>
      <div className="col-lg-10">
      <input placeholder={this.props.obj.Title} onChange={this.filmName} type="text"/>
      </div>
      </div>
      <div className="form-group">
      <div className="col-lg-12">

      <button className="btn btn-success pull-right" type="submit" onClick={this.update}>Submit</button>
      </div>
      </div>
      </form>
      </div>
      </div>
      </div>
      </div>
    </div>

  )

  }

})
module.exports=DisplayFav;
