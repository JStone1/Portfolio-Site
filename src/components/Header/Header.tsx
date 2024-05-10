import "./Header.scss";
import Nav from "@components/Nav/Nav";

function Header() {
  return (
    <>
      <header>
        {/* <h2>John Stone</h2> */}
        <img className="logo" src="/assets/jslogo4.png" />
        <Nav />
      </header>
    </>
  );
}

export default Header;
