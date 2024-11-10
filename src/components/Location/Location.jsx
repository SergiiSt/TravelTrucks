import css from '../Location/Location.module.css';

export default function Location() {
  return (
    <section className={css.section}>
      <input type="text" className={css.text} placeholder="City" />
    </section>
  );
}
