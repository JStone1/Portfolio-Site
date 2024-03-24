import "./ThemeSwitcher.scss";

interface Props {}

function ThemeSwitcher({}: Props) {
  return (
    <>
      <form className="theme-picker" action="">
        <fieldset>
          <legend className="visually-hidden">Pick theme</legend>
          <label className="visually-hidden" htmlFor="theme">
            Orange
          </label>
          <input type="radio" name="theme" id="orange" checked />
          <label className="visually-hidden" htmlFor="theme">
            Green
          </label>
          <input type="radio" name="theme" id="green" />
          <label className="visually-hidden" htmlFor="theme">
            Pink
          </label>
          <input type="radio" name="theme" id="pink" />
        </fieldset>
      </form>
    </>
  );
}

export default ThemeSwitcher;
