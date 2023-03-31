// import Message from './Message';
import Alert from "./components/alert";
import Button from "./components/Button/button";
import { useState } from "react";
/*import ListGroup from "./components/ListGroup";*/
import ListGroup from "./components/ListGroup/ListGroup";
import { TbHandRock } from "react-icons/tb";

function App() {
  let items = ["Nairobi", "Tokyo", "Cuba", "Paris", "London"];

  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="heading"
        onSelectItem={handleSelectItem}
      ></ListGroup>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <span>
            Hello World <TbHandRock />
          </span>
        </Alert>
      )}

      <Button color="success" onClick={() => setAlertVisibility(true)}>
        <span>Hello</span>
      </Button>
    </div>
  );
}

export default App;
