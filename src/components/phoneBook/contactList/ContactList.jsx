import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/index';
import { Contact } from './Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  const filter = useSelector(selectFilter);

  const filtredContacts = useMemo(
    () =>
      contacts.filter(
        contact =>
          contact.phone.toLowerCase().includes(filter.toLowerCase()) ||
          contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

  return (
    <ul>
      {filtredContacts.map(({ id, name, phone }) => {
        return (
          <li className={css.list} key={id}>
            <Contact name={name} phone={phone} id={id} />
          </li>
        );
      })}
    </ul>
  );
};

export { ContactList };
