import React, { Component } from 'react';
import FetchItem from './FetchItem';
import pic from '../github.jpeg'

class Fetch extends Component {

	render(){
		let githubUser;
     if(this.props.userdata){
          githubUser = this.props.userdata.map((item,i) => {
          return (
            <FetchItem key={i} item={item} />
          );
        });
      }

		return(
    
			<div className="userdata"> 
      <div>
      <img src={pic} alt="github pic" />
      </div> 
        <form><br/>
           <input type="text" vlaue={this.props.value} onChange={(e) => this.props.handleChange(e)}/>
           <button type="text" name="" onClick={(e) =>this.props.handleAdd(e)}>submit</button><br/>
        </form>
        {githubUser}
      </div>	
		);
	}
}
export default Fetch;