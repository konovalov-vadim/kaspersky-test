import * as React from 'react';
import AppContext, {IAppContext} from 'context/appContext';

export interface IWithContextProps {
  appContext: IAppContext;
}

export const withContext = (Component: React.ComponentClass<any>) => {
  return (props: any) => (
    <AppContext.Consumer>{context => <Component {...props} appContext={context} />}</AppContext.Consumer>
  );
};
