import { useDispatch, useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';
// import { fetchCampers } from '../../redux/campers/operations';

import CamperCard from '../CamperCard/CamperCard';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations';

import css from '../CamperList/CamperList.module.css';

export default function CamperList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.listWrap}>
      <ul>
        {campers.map(camper => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
}
