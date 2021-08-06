import navbar from "../styles/navbar.module.css";

const Sroll = ({ children }) => {
  return <div className={navbar.scroll}>{children}</div>;
};

export default Sroll;
