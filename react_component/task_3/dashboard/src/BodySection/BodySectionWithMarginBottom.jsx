import BodySection from './BodySection';
import PropTypes from 'prop-types';

function BodySectionWithMarginBottom({ title, children = null}){
    return (
      <div className="bodySectionWithMargin">
        <BodySection title={title}>{children}</BodySection>
      </div>
    );
  }

  BodySectionWithMarginBottom.PropTypes ={
    title:PropTypes.string.isRequired,
    children: PropTypes.node,
  };
  

export default BodySectionWithMarginBottom;
