// task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.jsx
import React, { Component } from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';

class BodySectionWithMarginBottom extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { title, children } = this.props;

    return (
      <div className="bodySectionWithMargin">
        <BodySection title={title}>{children}</BodySection>
      </div>
    );
  }
}

export default BodySectionWithMarginBottom;
