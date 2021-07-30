import { Spring, animated } from "react-spring";

const SpringPage = () => {
  return (
    <Spring
      from={{ opacity: 0, color: "red" }}
      to={[
        { opacity: 1, color: "#ffaaee" },
        { opacity: 0, color: "rgb(14,26,19)" },
        { opacity: 1, color: "#ffaaee" }
      ]}
    >
      {(styles) => (
        <animated.div style={styles}>I will fade in and out</animated.div>
      )}
    </Spring>
  );
};

export default SpringPage;
