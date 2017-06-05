import React from '../../node_modules/react';
import ReactDOM from '../../node_modules/react-dom';
//import axios from '../../node_modules/axios';
//Axios can be used or fetch, or jQuery, etc.

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  componentDidMount(){
    let posts = [];
    posts.push({
      ID: 1,
      Title: "Some Title",
      Content: "Some content..."
    });
    posts.push({
      ID: 2,
      Title: "Some Other Title",
      Content: "Some other content..."
    });

    this.setState({
          posts: posts
    });
  //var self = this;
  /*
  this.serverRequest = 
      axios
        .get("./php/api/RestController.php?view=all")
        .then(function(result) {
          result.data.Posts.reverse(); //Newest order
          let more = false;
          if(result.data.Posts.length > 2){
            more = true;
          }
            self.setState({
                    posts: result.data.Posts,
                    more: more
            });
        });
    */
  }
  /*
  shouldComponentUpdate(nextProps, nextState){
    return nextState.posts !== this.state.posts;
  }
  */
 componentWillUnmount(){
    //this.serverRequest.abort();
    this.setState({
            posts: []
    });
  }

  render(){
    return (
      <div>
      	<h1>NEWS & ANNOUNCEMENTS</h1>
        {this.state.posts.map((post,index) => {
	          return (
	            <div key={post.ID} className="post">
	              <h2>{post.Title}</h2>
	              <br/>
	              <p>
	              	{
	              		post.Content.split('\\\n').map((item, key) => {
						  return <span key={key}>{item}<br/></span>
						})
	              	}
	             </p>
	            </div>
	          );
        })}
      </div>
    );
  }
}

ReactDOM.render(
	<Home />, document.getElementById('posts')
);
