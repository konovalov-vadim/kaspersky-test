import * as React from 'react';
import {ShapeCircle, ShapeRectangle, ShapeRectangleSkew} from 'commonComponents/Logo/styled';

const Logo = () => (
  <div className="d-flex">
    <ShapeCircle />
    <ShapeRectangle />
    <ShapeCircle />
    <ShapeRectangleSkew />
  </div>
);

export default Logo;
