import "./styles.css";
import { Container } from "semantic-ui-react";
import AccordionComponent from "./components/AccordionComponent";

export default function App() {

  return (

    <div className="App">

      <Container style={{ margin: 20 }}>

        <AccordionComponent />

      </Container>

    </div>
    
  );
}
