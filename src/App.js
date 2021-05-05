import "./App.css";
import ButtonCTA from "./components/ButtonCTA";
import IconToggle from "./components/IconToggle";
import Logo from "./components/Logo";
import { ReactComponent as HappySmiley } from "./icons/HappySmiley.svg";
import { ReactComponent as SadSmiley } from "./icons/SadSmiley.svg";

function App() {
  return (
    <div className='App'>
      <h1>Tickets please!</h1>
      <IconToggle
        componentA={<HappySmiley className='icon' />}
        componentB={<SadSmiley className='icon' />}
      />
      <ButtonCTA text={"CLICK ME!"} />
      <Logo size='s' />
      <Logo size='m' />
      <Logo size='l' />
      <Logo size='xl' />
    </div>
  );
}

export default App;
