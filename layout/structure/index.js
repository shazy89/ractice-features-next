import Button from "@material-ui/core/Button";
import MyButton from "../../components/buttons/Button";
import MyCard from "../../components/cards/MyCard";

const Structure = () => {
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
};

export default Structure;
