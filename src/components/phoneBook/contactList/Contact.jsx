import PropTypes from 'prop-types';
import { AiFillContacts } from 'react-icons/ai';
import css from './ContactList.module.css';

export const Contact = ({ name, phone }) => {
  return (
    <div className={css.itemContainer}>
      <AiFillContacts />
      <p>{`${name}: ${phone}`}</p>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
