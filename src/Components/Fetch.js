import React, { Component } from 'react';
import FetchItem from './FetchItem';

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