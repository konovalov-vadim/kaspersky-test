import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import {StyledCoverLoader} from 'commonComponents/Bootstrap/styled';
import {Suspense} from 'react';
import {delay} from 'q';
import Utility from 'utility/Utility';
import CoverLoader from 'commonComponents/Coverloader/CoverLoader';
import {BrowserRouter} from 'react-router-dom';
import ColorPalette from 'constants/ColorPalette';

interface IState {
  showLoader: boolean;
}

const isMobile = !!Utility.MobileDetector.any();
const delayDuration = 1000;

class Bootstrap extends React.PureComponent<{}, IState> {
  public state = {
    showLoader: false
  };

  private renderFallback = () => (
    <StyledCoverLoader opacity={this.state.showLoader ? 1 : 0} transition={delayDuration * 0.7}>
      <CoverLoader loaderSize={40} bgOpacity={0} loaderColor={ColorPalette.blue1} />
    </StyledCoverLoader>
  );

  private importHandler = (extImport: () => any) => async () => {
    await delay(delayDuration * 0.15);
    this.setState({showLoader: true});
    await delay(delayDuration);

    const res = await extImport();

    this.setState({showLoader: false});
    await delay(delayDuration);

    return res;
  };

  private application: any = isMobile
    ? React.lazy(this.importHandler(() => import('mobile/MobileMock')))
    : React.lazy(this.importHandler(() => import('web/MainContainer/MainContainer')));

  public render() {
    const Application = this.application;

    return (
      <BrowserRouter>
        <Suspense fallback={this.renderFallback()}>
          <Application />
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default Bootstrap;
