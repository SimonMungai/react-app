// import Message from './Message';
import Alert from "./components/alert";
import Button from "./components/button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <span>Hello World</span>
        </Alert>
      )}

      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        <span>Hello</span>
      </Button>
    </div>
  );
}

export default App;
