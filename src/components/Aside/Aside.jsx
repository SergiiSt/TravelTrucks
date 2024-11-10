import Location from '../Location/Location';
import Equipment from '../Equipment/Equipment';
import Type from '../Type/Type';

import css from '../Aside/Aside.module.css';

export default function Aside() {
  return (
    <div className={css.aside}>
      <p className={css.paragraph}>Location</p>
      <Location />
      <p className={css.paragraphFilters}>Filters</p>
      <Equipment />
      <Type />
    </div>
  );
}
