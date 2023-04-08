import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassArrowRight,
  faMagnifyingGlass,
  faTrashAlt,
  faPen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function Table() {
  return (
    <div className="container">
      <div className="header">
        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <table>
        <tr>
          <th>Patiente</th>
          <th>Document</th>
          <th>Age</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>091.744.894-45</td>
          <td>23</td>
          <td>
            <span className="badge-active">Ativo</span>
          </td>
          <td className="icons">
            <FontAwesomeIcon
              className="icons"
              icon={faMagnifyingGlassArrowRight}
              color="#00adb5"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="icons"
              icon={faTrashAlt}
              color="#00adb5"
            ></FontAwesomeIcon>
            <FontAwesomeIcon icon={faPen} color="#00adb5"></FontAwesomeIcon>
          </td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>091.744.894-45</td>
          <td>23</td>
          <td>
            <span className="badge-active">Ativo</span>
          </td>
          <td className="icons">
            <FontAwesomeIcon
              className="icons"
              icon={faMagnifyingGlassArrowRight}
              color="#00adb5"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="icons"
              icon={faTrashAlt}
              color="#00adb5"
            ></FontAwesomeIcon>
            <FontAwesomeIcon icon={faPen} color="#00adb5"></FontAwesomeIcon>
          </td>
        </tr>
      </table>
    </div>
  );
}
