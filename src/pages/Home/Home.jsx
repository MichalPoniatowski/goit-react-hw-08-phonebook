import css from './Home.module.css';

export const Home = () => {
  return (
    <div className={css.wrapper}>
      <h1>PHONEBOOK</h1>
      <div>
        <img
          src="https://i.pinimg.com/originals/5f/8a/5d/5f8a5d8a99ad223229f627ca6bc97b4c.jpg"
          alt="Rowan Atkinson in phonebox"
          className={css.image}
        />
      </div>
    </div>
  );
};
