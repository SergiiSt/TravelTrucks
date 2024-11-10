import { useSelector } from 'react-redux';
import css from '../CamperFeatures/CamperFeatures.module.css';
import { selectCamperById } from '../../redux/campers/selectors';
import { useParams } from 'react-router';
import Booking from '../Booking/Booking';
import Trm from '../../img/Trm.svg';
import Fill from '../../img/Fill.svg';
import Shower from '../../img/Shower.svg';
import Kitchen from '../../img/Kitchen.svg';
import AC from '../../img/AC.svg';
import Gas from '../../img/Gas.svg';
import Micro from '../../img/Micro.svg';
import Fridge from '../../img/Fridge.svg';
import Water from '../../img/Water.svg';
import Radio from '../../img/Radio.svg';

export default function CamperFeatures() {
  const { id } = useParams();
  const camper = useSelector(state => selectCamperById(state, id));
  console.log(camper);

  return (
    <>
      <section className={css.featureWrap}>
        <div className={css.listWrap}>
          <ul className={css.featuresList}>
            <li className={css.featuresListItem}>
              <img src={Trm} className={css.pic} />
              {camper?.transmission}
            </li>
            <li className={css.featuresListItem}>
              <img src={Fill} className={css.pic} />
              {camper?.engine}
            </li>
            {camper?.bathroom ? (
              <li className={css.featuresListItem}>
                <img src={Shower} className={css.pic} />
                bathroom
              </li>
            ) : null}
            {camper?.kitchen ? (
              <li className={css.featuresListItem}>
                <img src={Kitchen} className={css.pic} />
                kitchen
              </li>
            ) : null}
            {camper?.AC ? (
              <li className={css.featuresListItem}>
                <img src={AC} className={css.pic} />
                AC
              </li>
            ) : null}
            {camper?.gas ? (
              <li className={css.featuresListItem}>
                <img src={Gas} className={css.pic} />
                gas
              </li>
            ) : null}
            {camper?.microwave ? (
              <li className={css.featuresListItem}>
                <img src={Micro} className={css.pic} />
                microwave
              </li>
            ) : null}
            {camper?.refrigerator ? (
              <li className={css.featuresListItem}>
                <img src={Fridge} className={css.pic} />
                refrigerator
              </li>
            ) : null}
            {camper?.water ? (
              <li className={css.featuresListItem}>
                <img src={Water} className={css.pic} />
                water
              </li>
            ) : null}
            {camper?.radio ? (
              <li className={css.featuresListItem}>
                <img src={Radio} className={css.pic} />
                radio
              </li>
            ) : null}
          </ul>
        </div>
        <p className={css.details}>Vehicle details</p>
        <hr />
        <table className={css.table}>
          <div className={css.dataWrap}>
            <tr className={css.tableLabel}>Form</tr>
            <td className={css.tableValue}>{camper?.form}</td>
          </div>
          <div className={css.dataWrap}>
            <tr className={css.tableLabel}>Length</tr>
            <td className={css.tableValue}>{camper?.length}</td>
          </div>
          <div className={css.dataWrap}>
            <tr className={css.tableLabel}>Width</tr>
            <td className={css.tableValue}>{camper?.width}</td>
          </div>
          <div className={css.dataWrap}>
            <tr className={css.tableLabel}>Height</tr>
            <td className={css.tableValue}>{camper?.height}</td>
          </div>
          <div className={css.dataWrap}>
            <tr className={css.tableLabel}>Tank</tr>
            <td className={css.tableValue}>{camper?.tank}</td>
          </div>
          <div className={css.dataWrap}>
            <tr className={css.tableLabel}>Consumption</tr>
            <td className={css.tableValue}>{camper?.consumption}</td>
          </div>
        </table>
      </section>
      <div className={css.bookingWrap}>
        <Booking />
      </div>
    </>
  );
}
