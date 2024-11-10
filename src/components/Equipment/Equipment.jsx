import css from '../Equipment/Equipment.module.css';
import AC from '../../img/AC.svg';
import Transmission from '../../img/Transmission.svg';
import Kitchen from '../../img/Kitchen.svg';
import Tv from '../../img/Tv.svg';
import Shower from '../../img/Shower.svg';

export default function Equipment() {
  return (
    <div className={css.wrap}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <hr className={css.line} />
      <div className={css.radioGroup}>
        <label className={css.radioCard}>
          <input type="checkbox" name="feature" value="AC" />
          <div className={css.icon}>
            <img src={AC} />
          </div>
          AC
        </label>

        <label className={css.radioCard}>
          <input type="checkbox" name="feature" value="Automatic" />
          <div className={css.icon}>
            <img src={Transmission} />
          </div>
          Automatic
        </label>

        <label className={css.radioCard}>
          <input type="checkbox" name="feature" value="Kitchen" />
          <div className={css.icon}>
            <img src={Kitchen} />
          </div>
          Kitchen
        </label>

        <label className={css.radioCard}>
          <input type="checkbox" name="feature" value="TV" />
          <div className={css.icon}>
            <img src={Tv} />
          </div>
          TV
        </label>

        <label className={css.radioCard}>
          <input type="checkbox" name="feature" value="Bathroom" />
          <div className={css.icon}>
            <img src={Shower} />
          </div>
          Bathroom
        </label>
      </div>
    </div>
  );
}
