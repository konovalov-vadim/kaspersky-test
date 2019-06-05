import * as React from 'react';
import Bootstrap from 'commonComponents/Bootstrap/Bootstrap';

export interface IAppContext {
  testData: number;
  setData: (func: (data: IAppContext) => Partial<IAppContext>) => void;
}

const contextValue: IAppContext = {
  testData: 7,
  setData: () => null
};

const AppContext = React.createContext<IAppContext>(contextValue);

export class BootstrapWithContext extends React.PureComponent<{}, IAppContext> {
  private setData = (func: (data: IAppContext) => Partial<IAppContext>) => {
    this.setState({...(func(this.state) as IAppContext)});
  };

  public state = {...contextValue, setData: this.setData};

  public render() {
    return (
      <AppContext.Provider value={this.state}>
        <Bootstrap />
      </AppContext.Provider>
    );
  }
}

export default AppContext;
