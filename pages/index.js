import { getAllEvents } from "../helpers/api-utils";
//import styles from "../styles/Home.module.css";

export default function Home({ events }) {
  console.log(events);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
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
