import "./App.css";
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
      <Logo size='s' />
      <Logo size='m' />
      <Logo size='l' />
      <Logo size='xl' />
      <button>make another button</button>
    </div>
  );
}

export default App;
