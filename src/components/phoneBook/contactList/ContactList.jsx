import { useSelector, useDispatch } from "react-redux";
import { deleteContact, selectFiltredContacts } from "redux/index";
import { Contact } from "./Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filtredContacts = useSelector(selectFiltredContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {filtredContacts.map(({ id, name, phone }) => {
        return (
          <li className={css.item} key={id}>
            <Contact name={name} phone={phone} />
            <button
              className={css.button}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
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
