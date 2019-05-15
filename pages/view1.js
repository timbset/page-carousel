import React from 'react';
import { withRouter } from 'next/router';

const View1 = props => (
  <div>
    <h1>View 1</h1>
    {props.router.query.content && (
      <div>content: {props.router.query.content}</div>
    )}
  </div>
);

export default withRouter(View1);
