import React from 'react';
import 'test-object-footer';  //Imports footer object styles

export default class FooterBlock extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className='footer-block'>
        <h4> Main Footer Block </h4>
        <div className='text-purple background-grey'>
          This is where the footer stuff is supposed to go. This should be purple with a grey background
        </div>
      </div>
    );
  }
}