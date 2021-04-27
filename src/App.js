import "./App.css";
import IconToggle from "./components/IconToggle";
import Logo from "./components/Logo";
import { ReactComponent as DocPlus } from "./icons/DocPlus.svg";
import { ReactComponent as DocMinus } from "./icons/DocMinus.svg";

function App() {
  return (
    <div className='App'>
      <h1>Tickets please!</h1>
      <IconToggle componentA={<DocPlus />} componentB={<DocMinus />} />
      <Logo size='s' />
      <Logo size='m' />
      <Logo size='l' />
      <Logo size='xl' />
      <button>make another button</button>
    </div>
  );
}

export default App;
