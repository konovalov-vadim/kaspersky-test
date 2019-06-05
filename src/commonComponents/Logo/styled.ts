import styled from "styled-components";
import ColorPalette from "constants/ColorPalette";

const height = 60;

export const ShapeCircle = styled.div`
  background: ${ColorPalette.gray2};
  height: ${height}px;
  width: ${height}px;
  border-radius: ${height}px;
`;

export const ShapeRectangle = styled.div`
  background: ${ColorPalette.gray2};
  height: ${height}px;
  width: ${height / 2}px;
  margin: 0 10px;
`;

export const ShapeRectangleSkew = styled.div`
  background: ${ColorPalette.gray2};
  height: ${height}px;
  width: ${height}px;
  clip-path: polygon(${height}px 0, ${height / 2}px ${height}px, 0 ${height}px, ${height / 2}px 0);
`;