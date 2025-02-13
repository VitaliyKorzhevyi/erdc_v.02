import { NavLink } from "react-router-dom";

const Statistics = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="summary-information">Моніторинг прийомів</NavLink>
        </li>
        <li>
          <NavLink to="search">Детальний пошук</NavLink>
        </li>
      </ul>
 
    </div>
  );
};

export default Statistics;
