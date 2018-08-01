import React, { Component } from 'react';

class FetchItem extends Component {
	render(){
		return(
		     <div className="github-box">
			 	<div className="card" id="cardtitle">
			 		<img className="pic" alt="user pic" src={this.props.item.owner.avatar_url}/>
			 		<h4 className="collection-item">{this.props.item.owner.login}</h4>
			 			<h5 className="collection-item">rep: {this.props.item.name}</h5>
			 			<span className="weather-description"></span> 									
			 			<br/><br/>
			 			<p className="etc">
	      				<i className="material-icons"></i><br/>
	      				<i className="material-icons"></i><br/><br/> 
	      				</p> 
			 	</div>		
    		</div>	
		);
	}
}
export default FetchItem;
