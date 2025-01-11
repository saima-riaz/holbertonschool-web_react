import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  class WithLoggingHOC extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name || 'Component'} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name || 'Component'} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLoggingHOC.displayName = `WithLogging(${WrappedComponent.name || 'Component'})`;

  return WithLoggingHOC;
};

export default WithLogging;
