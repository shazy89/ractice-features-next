import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import face from "../../public/computer-icons-user-profile-person-thumbnail_bxdnq2.jpg";
import styles from "../../styles/loading.module.css";
const ParalaxImage = () => {
  return (
    <>
      <section className={styles.space}>
        <h1>HEY THERE</h1>
      </section>
      <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <Image
          alt="Picture of the author"
          width={500}
          height={500}
          src={face}
        />
      </Parallax>
    </>
  );
};

export default ParalaxImage;
