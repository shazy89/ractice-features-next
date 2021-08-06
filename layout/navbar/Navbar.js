import navbar from "../../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navbar.nav}>
      <ul className={navbar.logo}>
        <li className={navbar.link}>Home Logo</li>
      </ul>
      <ul className={navbar.links}>
        <li className={navbar.link}>Mission</li>
        <li className={navbar.link}>Target</li>
        <li className={navbar.link}>Practice</li>
      </ul>
    </nav>
  );
};

export default Navbar;
