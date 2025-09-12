import "./App.css";
import Card from "./Card";
import { CustomCursor } from "./components/CustomCursor/CustomCursor";

function App() {
  return (
    <div className="font-mona flex h-full w-full cursor-none items-center justify-center">
      <Card />
      <CustomCursor />
      <p className="absolute bottom-5 text-xs text-neutral-600">Made by Tej</p>
    </div>
  );
}

export default App;
