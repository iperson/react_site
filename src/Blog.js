import React from 'react'
import qs from 'query-string'
import {NavLink} from 'react-router-dom'


class PostTags extends React.Component {
  render() {
    return (
      <div className="ui label">
        <i className="coffee icon"></i> {this.props.tag}
      </div>
    )
  }
}

class Post extends React.Component {
  render() {
    const tags = this.props.tags.map((tag, index) => (
      <PostTags
        key={index}
        tag={tag}
      />
    ));
    
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img className="ui small rounded image"  
          src={this.props.image_src}
          alt="">
        </img>
        <p>
          {this.props.summary}
        </p>
        
        <div className="eight wide column">
          {tags}
        </div>
        
        <h4 className="ui horizontal divider header">
          <a href="url"><i className="book icon"></i>
            Show More
          </a>
        </h4>
      </div>
    ) 
  }
}

function checkTags (arr, searchString) {
  console.log("search string: " + searchString);
  let new_arr = []//this.state.active_tags.slice();
  let tags = searchString.substr(1)
  console.log("parsed tag: ");
  console.log(tags)
  if (typeof tags["test"] !== "undefined") {
    Array.prototype.forEach.call(tags["test"], t => {
      new_arr.push(t);
    });
    console.log("new arr");
    console.log(new_arr)
  }
};

class Blog extends React.Component {
  state = {
    posts: [],
    active_tags: [],
    buttons: {
        tags: ["blender", "cuda", "c++", "python"],
    },
  };

  componentDidMount() {
    let loadData = require('./data.json');
    // let new_arr = []//this.state.active_tags.slice();
    // let tags = qs.parse(this.props.location.search);
    // if (typeof tags["tags"] !== "undefined") {
    //   Array.prototype.forEach.call(tags["tags"], t => {
    //     new_arr.push(t);
    //   });
    //   console.log(new_arr);
    // }

    // check if URI has any active tags
    this.setState({ posts: loadData.posts,
                    /*active_tags: new_arr*/ });
  }
  
  // handleFilterPosts = (tag) => {
  //   let array = this.state.active_tags.slice();
  //   let index = array.indexOf(tag)
    
  //   if (index >= 0) {
  //     array.splice(index, 1);
  //   } else {
  //     array.push(tag);      
  //   }
    
  //   this.setState(
  //     {active_tags: array}
  //   );
  // };

  render() {
    const posts = this.state.posts.map(post => {
      if (this.props.location.search === "") {
        return (
          <Post
            key={post.id}
            title={post.title}
            date={post.date}
            tags={post.tags}
            image_src={post.image_src}
            summary={post.summary}
          />
        )
      }
      else if (checkTags(post.tags, this.props.location.search)) {
        return (
          <Post
            key={post.id}
            title={post.title}
            date={post.date}
            tags={post.tags}
            image_src={post.image_src}
            summary={post.summary}
          />
        )
      } 
      else {
        return null;
      }
    });
    
    const filters = this.state.buttons.tags.map((tag, index) => {
      let total_path = "?" + tag;

      return (
        <NavLink
          to={total_path}
          className="ui floated basic small button"
          key={index}
        > 
          {tag}
        </NavLink>
      );
    });
    
    return (
      <div>
        <div className="ui container segment">
          <div className="ui stackable grid"> 
            <div className="three wide column">
              {filters}
            </div>
            <div className="thirteen wide column">
              {posts}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Blog;