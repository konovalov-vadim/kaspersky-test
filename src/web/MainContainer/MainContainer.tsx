import * as React from 'react';
import {StyledAppTitle, StyledContainer, StyledInnerContainer} from 'web/MainContainer/styled';
import Utility from 'utility/Utility';
import {IWithExtOpacity} from 'utility/withSmoothAppearance';
import {connect} from 'react-redux';
import {Action} from 'redux';
import {hideWarning, showWarning} from 'redux/dragDropWarningDucks';
import {Redirect, Route, Switch} from 'react-router';
import Home from 'web/Home/Home';
import AddBook from 'web/AddBook/AddBook';
import EditBook from 'web/EditBook/EditBook';
import {ThunkDispatch} from "redux-thunk";

interface IConnectProps {
  dispatch: ThunkDispatch<any, any, Action>;
}

class MainContainer extends React.PureComponent<IWithExtOpacity & IConnectProps> {
  componentDidMount() {
    window.addEventListener('dragover', this.onDragOver);
    window.addEventListener('dragleave', this.onDragLeave);
    window.addEventListener('drop', this.onDragLeave);
  }

  private onDragOver = (e: any) => {
    this.props.dispatch(showWarning());
    e.preventDefault();
  };

  private onDragLeave = (e: any) => {
    this.props.dispatch(hideWarning());
    e.preventDefault();
  };

  public render() {
    const {extOpacity} = this.props;

    return (
      <StyledContainer opacity={extOpacity}>
        <StyledAppTitle>Book Storage</StyledAppTitle>
        <StyledInnerContainer>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/book-add" component={AddBook} />
            <Route path="/book-edit/:id" component={EditBook} />
            <Redirect to="/home" />
          </Switch>
        </StyledInnerContainer>
      </StyledContainer>
    );
  }
}

export default connect()(Utility.withSmoothAppearance(MainContainer));
