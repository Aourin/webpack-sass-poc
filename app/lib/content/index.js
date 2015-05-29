import React from 'react';                    
import {default as comments} from './mock-comments';  //Mock Comments
import Comment from 'lib/comment';                    //CommentBlock Component

import 'test-background-grey';                        //Shared SASS Repo

//Default ContentBlock class
export default class ContentBlock extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    //Create a Comment Collection
    const CommentList = comments.map((comment) => {
      return <Comment model={comment}/> 
    }, comments);

    //Return content-block
    return (
      <div className='content-block'>
        This is a bunch of content in this content pane
        {CommentList}

        <div className='background-grey'>
          This should be a grey background using  the installed test-background-grey package.
        </div>
      </div>
    );
  }
}