// Parent component
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const parentVariable = 'Hello from parent';

  return (
    <div>
      <ChildComponent parentProp={parentVariable} />
    </div>
  );
};

export default ParentComponent;

// Child component
import React from 'react';

const ChildComponent = ({ parentProp }) => {
  return <div>{parentProp}</div>;
};

export default ChildComponent;
