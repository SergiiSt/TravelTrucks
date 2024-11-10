import css from '../Type/Type.module.css';
import Van from '../../img/Van.svg';
import Fi from '../../img/Fi.svg';
import Alc from '../../img/Alc.svg';

export default function Type() {
  return (
    <div>
      <h3 className={css.title}>Vehicle type</h3>
      <hr className={css.line} />
      <div className={css.radioGroup}>
        <label className={css.radioCard}>
          <input type="radio" name="vehicleType" />
          <div className={css.icon}>
            <img src={Van} />
          </div>
          Van
        </label>
        <label className={css.radioCard}>
          <input type="radio" name="vehicleType" />
          <div className={css.icon}>
            <img src={Fi} />
          </div>
          Fully Integrated
        </label>
        <label className={css.radioCard}>
          <input type="radio" name="vehicleType" />
          <div className={css.icon}>
            <img src={Alc} />
          </div>
          Alcove
        </label>
      </div>
    </div>
  );
}
