import navbar from "../../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navbar.nav}>
      <ul>
        <li>Mission</li>
        <li>Target</li>
        <li>Practice</li>
      </ul>
      <ul>
        <li>Home Logo</li>
      </ul>
    </nav>
  );
};

export default Navbar;
