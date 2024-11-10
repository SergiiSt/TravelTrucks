import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';

import { useParams } from 'react-router';
import { selectCamperById } from '../../redux/campers/selectors';
import CamperFeatures from '../../components/CamperFeatures/CamperFeatures';
import css from '../DetailsPage/DetailsPage.module.css';
import star from '../../img/star.svg';
import map from '../../img/map.svg';

export default function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);
  const camper = useSelector(selectCamperById);
  //   console.log(camper);

  return (
    <main className={css.main}>
      <h2 className={css.title}>{camper?.name}</h2>
      <p className={css.locRev}>
        <img src={star} />
        {camper?.rating.toFixed(1)}
        <span className={css.span}>({camper?.reviews.length}Reviews)</span>
        <span>
          <img src={map} className={css.map} width={16} />
          {camper?.location}
        </span>
      </p>
      <p className={css.price}> €{camper?.price}.00</p>
      <ul className={css.list}>
        <li className={css.listItem}>
          <img
            src={camper?.gallery[0].original}
            alt=""
            width={292}
            height={312}
          />
        </li>
        <li className={css.listItem}>
          <img src={camper?.gallery[1].thumb} alt="" width={292} height={312} />
        </li>
        <li className={css.listItem}>
          <img src={camper?.gallery[2].thumb} alt="" width={292} height={312} />
        </li>
        <li className={css.listItem}>
          <img src={camper?.gallery[2].thumb} alt="" width={292} height={312} />
        </li>
      </ul>
      <p className={css.desc}>{camper?.description}</p>
      <ul className={css.secondList}>
        <li className={css.secondListItem}>
          <NavLink to="features" className={css.link}>
            Features
          </NavLink>
        </li>
        <li className={css.secondListItem}>
          <NavLink to="reviewshh" className={css.link}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <hr className={css.line} />
      <CamperFeatures camper={camper?.id} />
    </main>
  );
}
