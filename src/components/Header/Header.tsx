import "./Header.scss";
import Nav from "@components/Nav/Nav";
import ThemeSwitcher from "@components/ThemeSwitcher/ThemeSwitcher";

function Header() {
  return (
    <>
      <header>
        <h2>John Stone</h2>
        <Nav />
      </header>
    </>
  );
}

export default Header;
