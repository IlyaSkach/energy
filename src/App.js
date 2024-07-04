import logo from "./logo.svg";
import "./App.scss";
import Header from "./companents/Header/Header";
import Title from "./companents/Title/Title";
import Advantages from "./companents/Advantages/Advantages";
import Services from "./companents/Ser/Services";
import Reviews from "./companents/Reviews/Reviews";
import Contacts from "./companents/Contacts/Contacts";


function App() {
  return (
    <>
      <Header />
      <Title/>
      <Advantages/>
      <Services/>
      <Reviews/>
      <Contacts/>
      
    </>
  );
}

export default App;
