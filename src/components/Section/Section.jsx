
import PropTypes from 'prop-types';
import { SectionWrapp } from '../Section/Section.styled';
import { Title } from './Section.styled'

export const Section = ({ children, title }) => {
  return (
    <SectionWrapp className="FeedbackBlock">
      <>
        <Title>{title}</Title>
      </>
      {children}
    </SectionWrapp>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

