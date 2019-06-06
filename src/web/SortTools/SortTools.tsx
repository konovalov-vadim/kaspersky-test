import * as React from 'react';
import {SortType} from 'models/ILocalStorage';
import {StyledTool} from 'web/SortTools/Styled';
import {SortProps} from 'web/Home/Home';

interface IOwnProps {
  yearSort: SortType;
  titleSort: SortType;
  changeTitleSort: () => void;
  changeYearSort: () => void;
  sortProp: SortProps;
}

const Indicator = ({
  direction,
  title,
  onClick,
  active
}: {
  direction: SortType;
  title: string;
  onClick: any;
  active: boolean;
}) => (
  <StyledTool onClick={onClick} active={active}>
    {title} <span>{direction === 'asc' ? <>&#x025B4;</> : <>&#x025BE;</>}</span>
  </StyledTool>
);

const SortTools = ({yearSort, titleSort, changeTitleSort, changeYearSort, sortProp}: IOwnProps) => (
  <div className="d-flex">
    <Indicator direction={titleSort} title="Title" onClick={changeTitleSort} active={sortProp === 'titleSort'}/>
    <Indicator direction={yearSort} title="Year" onClick={changeYearSort} active={sortProp === 'yearSort'}/>
  </div>
);

export default SortTools;
