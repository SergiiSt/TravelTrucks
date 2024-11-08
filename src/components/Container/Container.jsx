import PropTypes from 'prop-types';
import css from '../Container/Container.module.css';

export default function Container({ children }) {
  return <div className={css.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
