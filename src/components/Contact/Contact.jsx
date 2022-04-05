import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteContact } from "../../services/api";

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={styles.Contact__item}>
      {name}: {phone}
      <button
        className={styles.Contact__button}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Remove
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};
