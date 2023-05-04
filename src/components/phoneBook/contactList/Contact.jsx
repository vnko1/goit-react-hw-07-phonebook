import PropTypes from 'prop-types';
import { AiFillContacts } from 'react-icons/ai';
import css from './ContactList.module.css';
import { useDeleteContactMutation } from 'redux/index';

export const Contact = ({ name, phone, id }) => {
  const [deleteContacts] = useDeleteContactMutation();
  return (
    <div className={css.container}>
      <div className={css.itemContainer}>
        <AiFillContacts />
        <p>{`${name}: ${phone}`}</p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => deleteContacts(id)}
      >
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
