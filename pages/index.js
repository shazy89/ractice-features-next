import { getAllEvents, useEffect } from "../helpers/api-utils";

import Structure from "../layout/structure";
import Navbar from "../layout/navbar/Navbar";
export default function Home({ events }) {
  return (
    <>
      <Navbar />
      <Structure />
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
