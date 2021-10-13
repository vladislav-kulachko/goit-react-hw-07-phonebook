import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {delContact, getContacts} from '../../redux/phonebook/operations';
import s from './ContactList.module.scss';
import {getFilteredContacts} from '../../redux/phonebook/selectors';

export default function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <ul className={s.list}>
      {filteredContacts.length === 0 ? (
        <li className={s.notify}>
          Oops, this is empty... Please add your contacts!
        </li>
      ) : (
        filteredContacts.map(({id, name, number}) => (
          <li className={s.item} key={id}>
            {name}:<span className={s.phone}>{number}</span>
            <button
              className={s.button}
              id={id}
              type="button"
              onClick={e => dispatch(delContact(e.target.id))}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
}
