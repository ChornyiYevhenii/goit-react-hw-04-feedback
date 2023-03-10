import PropTypes from 'prop-types';
import {
  ButonsWrapp,
  ButtonForFeedback,
} from './FeedbackWidget.styled';
import { Section } from 'components/Section/Section';


const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
      <Section title="Please leave feedback">
        <ButonsWrapp>
          {options.map(option => (
            <ButtonForFeedback
              key={option}
              type="button"
              onClick={() => {onLeaveFeedback(option)}}
            >
              {option.slice(0, 1).toUpperCase().concat(option.slice(1))}
            </ButtonForFeedback>
          ))}
        </ButonsWrapp>
      </Section>
    );
  }

 FeedbackOptions.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

export default FeedbackOptions;

