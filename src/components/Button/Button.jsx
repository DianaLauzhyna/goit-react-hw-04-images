import PropTypes from 'prop-types'; 

import { ButtonLoad } from './Button.styled';

const Button = ({ loadMoreHandler }) => (
  <ButtonLoad type="button" onClick={loadMoreHandler}>
    Load more
  </ButtonLoad>
);

Button.propTypes = {
  loadMoreHandler: PropTypes.func.isRequired,
};
export default Button;
