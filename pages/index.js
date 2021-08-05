import { getAllEvents } from "../helpers/api-utils";
import Button from "@material-ui/core/Button";
import MyButton from "../components/buttons/Button";
import MyCard from "../components/cards/MyCard";
import ImagesBox from "../layout/ImagesBox";
export default function Home({ events }) {
  console.log(events);
  return (
    <>
      <div>
        <h1>Hello World</h1>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <MyButton color="black" text="white" width={12}>
          Hey There
        </MyButton>
        <MyButton color="black" text="white" width={22}>
          Hey There
        </MyButton>
      </div>
      <div>
        <MyCard />
      </div>
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
