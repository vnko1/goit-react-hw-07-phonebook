import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/index';
import { Contact } from './Contact';
import css from './ContactList.module.css';
import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/index';
import { useMemo } from 'react';

const ContactList = () => {
  // const filter = useSelector(selectFilter);
  const { data: contacts } = useFetchContactsQuery();

  const [deleteContacts] = useDeleteContactMutation();
  // const filtredContacts = useMemo(
  //   () =>
  //     contacts.filter(
  //       contact =>
  //         contact.phone.toLowerCase().includes(filter.toLowerCase()) ||
  //         contact.name.toLowerCase().includes(filter.toLowerCase())
  //     ),
  //   [contacts, filter]
  // );

  return (
    <ul>
      {contacts.map(({ id, name, phone }) => {
        return (
          <li className={css.item} key={id}>
            <Contact name={name} phone={phone} />
            <button
              className={css.button}
              type="button"
              onClick={() => deleteContacts(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export { ContactList };
