import { getAllEvents, useEffect } from "../helpers/api-utils";

import Structure from "../layout/structure";
import Navbar from "../layout/navbar/Navbar";
import Scroll from "../components/Sroll";
import Video from "../components/video/Video";
export default function Home({ events }) {
  return (
    <>
      <Navbar />
      <Scroll>
        <Structure />
        <Structure />
      </Scroll>
    </>
  );
}
export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events
    },
    revalidate: 30
  };
}
