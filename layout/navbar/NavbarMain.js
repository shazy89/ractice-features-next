import nav from "../../styles/navbarmain.module.css";

const Navbar = () => {
  return (
    <nav className={navbar.nav}>
      <ul className={navbar.logo}>
        <li>Home Logo</li>
      </ul>
      <ul className={navbar.links}>
        <li>Mission</li>
        <li>Target</li>
        <li>Practice</li>
      </ul>
    </nav>
  );
};

export default Navbar;
