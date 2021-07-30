import { useControls } from "leva";

function LevaComponent() {
  const { name, aNumber } = useControls({ name: "World", aNumber: 0 });

  return (
    <div>
      Hey {name}, hello! {aNumber}
    </div>
  );
}

export default LevaComponent;
