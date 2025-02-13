import { NavLink } from 'react-router-dom';

const Workspace = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="create-report">Створити звіт</NavLink>
        </li>
        <li>
          <NavLink to="report-management">Керування звітами</NavLink>
        </li>
        <li>
          <NavLink to="editing-consultations">Редагування консультацій</NavLink>
        </li>
        <li>
          <NavLink to="marks">Відмітки</NavLink>
        </li>
        <li>
          <NavLink to="data-management">Керування даними</NavLink>
        </li>
        <li>
          <NavLink to="medicines">Медикаменти</NavLink>
        </li>
        <li>
          <NavLink to="medication-reports">Облік по медикаментам</NavLink>
        </li>
        <li>
          <NavLink to="pharmaceutical-accounting">Бухгалтерський облік</NavLink>
        </li>
      </ul>
 
    </div>
  );
};

export default Workspace;
