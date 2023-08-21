import PropTypes from 'prop-types';
import { Container } from 'components';
import { Title, SectionBox } from './Section.styled';
import { oneOfType } from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: oneOfType([PropTypes.element, PropTypes.array]),
};
