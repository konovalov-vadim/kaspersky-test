import * as React from 'react';

interface IState {
  opacity: number;
}

export interface IWithExtOpacity {
  extOpacity: number;
}

type InputProp = React.ComponentClass<any> | React.FunctionComponent<any>;

export const withSmoothAppearance = (Component: InputProp) => {
  return class extends React.PureComponent<{}, IState> {
    public state = {
      opacity: 0
    };

    public componentDidMount() {
      setTimeout(() => this.setState({opacity: 1}), 50);
    }

    public render() {
      return <Component extOpacity={this.state.opacity} {...this.props} />;
    }
  };
};
