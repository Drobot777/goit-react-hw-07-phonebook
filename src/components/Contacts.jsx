import css from './Contacts.module.css';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux/es/hooks/useSelector';
import {
  selectContactsDetails,
  deletePhone,
  selectFilterDetails,
} from 'redux/reducer';

export const Contacts = () => {
  const contacts = useSelector (selectContactsDetails);
  const valueFilter = useSelector (selectFilterDetails);
  const dispath = useDispatch ();

  const deleteContacts = e => {
    let idToDelete = e.currentTarget.id;
    dispath (deletePhone (idToDelete));
  };

  const filterItems = ary => {
    let arryContacts = ary.filter (el => {
      return el.name.toLowerCase ().indexOf (valueFilter.toLowerCase ()) > -1;
    });
    return arryContacts.map ((el, i) => {
      return (
        <li
          key={i.toString ()}
          id={el.id}
          className={css.list}
          onClick={deleteContacts}
        >
          {el.name}
          :
          {el.tel}
          <button type="button" className={css.button}>delete</button>
        </li>
      );
    });
  };
  const renderContacts = arry => {
    if (arry.length === 0) {
      return;
    }
    if (valueFilter === '') {
      return arry.map ((el, i) => {
        return (
          <li
            key={i.toString ()}
            id={el.id}
            className={css.list}
            onClick={deleteContacts}
          >
            {el.name}
            :
            {el.tel}
            <button type="button" className={css.button}>delete</button>
          </li>
        );
      });
    }
    return filterItems (arry);
  };

  return (
    <u className={css.item}>
      {renderContacts (contacts)}
    </u>
  );
};
