import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import face from "../../public/computer-icons-user-profile-person-thumbnail_bxdnq2.jpg";
import styles from "../../styles/loading.module.css";
import Link from "next/link";

const ParalaxImage = () => {
  return (
    <>
      <section className={styles.space}>
        <Link href="/">
          <a>Homepage</a>
        </Link>

        <div className="content">
          <Parallax offsetYMin={800} offsetYMax={1500}>
            <h2>Moving A</h2>
          </Parallax>
          <Parallax offsetYMin={-500} offsetYMax={2000}>
            <h2>Moving C</h2>
          </Parallax>
        </div>

        <style jsx>
          {`
            .content {
              margin-top: 300px;
              border: 2px solid grey;
              height: 1500px;
            }
          `}
        </style>
      </section>
      {
        <Parallax
          className={styles.parallax__image}
          y={[-30, 20]}
          tagOuter="figure"
        >
          <Image
            alt="Picture of the author"
            width={500}
            height={500}
            src={face}
          />
        </Parallax>
      }
    </>
  );
};

export default ParalaxImage;
