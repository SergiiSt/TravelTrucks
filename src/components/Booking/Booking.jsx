import css from '../Booking/Booking.module.css';

export default function Booking() {
  return (
    <section className={css.booking}>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <labelh>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Name*"
        />
      </labelh>
      <label>
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email*"
        />
      </label>
      <label>
        <input
          className={css.input}
          type="text"
          name="booking"
          placeholder="Booking date*"
        />
      </label>
      <label>
        <input
          className={css.inputCom}
          type="text"
          name="comment"
          placeholder="Comment"
        />
      </label>
    </section>
  );
}
