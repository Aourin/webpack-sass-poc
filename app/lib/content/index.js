import React from 'react';
import {default as comments} from './mock-comments';
import Comment from 'lib/comment';

//Default ContentBlock class
export default class ContentBlock extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    //Create a Comment Collection
    const CommentList = this.comments.map((comment) => {
      return <Comment model={comment}/> 
    }, comments);

    //Return content-block
    return (
      <div className='content-block'>
        This is a bunch of content in this content pane
        {CommentList}
      </div>
    );
  }
}