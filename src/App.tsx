import Card from "./components/card";
import { NoPropComponent } from "./types/component.types";

const App: NoPropComponent = () => {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-3xl mb-4">Passengers : </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <Card />
      </div>
    </div>
  );
};

export default App;
