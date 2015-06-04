import React from 'react';
// import 'test-object-comment';   //Imports test-object-comment package

export default class Comment extends React.Component {
  constructor (props) {
    super(props);
  }
  //Render Function
  render () {
    const model = this.props.model;
    return (
      <div className='comment-block'>
        <div className='comment-block__header background-grey text-orange'>
          {model.title}
        </div>
        <div className='comment-block__body'>
          "{model.comment}"
        </div>
        <div className='comment-block__footer'>
          By {model.user}
        </div>
      </div>
    );
  }
}