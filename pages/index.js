import { getAllEvents } from "../helpers/api-utils";
import Button from "@material-ui/core/Button";
//import styles from "../styles/Home.module.css";

export default function Home({ events }) {
  console.log(events);
  return (
    <div>
      <h1>Hello World</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
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
