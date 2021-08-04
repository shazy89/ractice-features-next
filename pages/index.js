import { getAllEvents } from "../helpers/api-utils";
import Button from "@material-ui/core/Button";
import MyButton from "../components/buttons/Button";

export default function Home({ events }) {
  console.log(events);
  return (
    <div>
      <h1>Hello World</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <MyButton color="black" text="white" width={"15rem"}>
        Hey There
      </MyButton>
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
