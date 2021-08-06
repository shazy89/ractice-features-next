import { getAllEvents, useEffect } from "../helpers/api-utils";

import Structure from "../layout/structure";
import Navbar from "../layout/navbar/Navbar";
import Scroll from "../components/Sroll";
import OnScrollNavigation from "../layout/navbar/OnScrollNavigation";
export default function Home({ events }) {
  return (
    <>
      <OnScrollNavigation />
      <Scroll>
        <Structure />
        <Structure />
      </Scroll>
      <Scroll>
        <Structure />
        <Structure />
      </Scroll>
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
