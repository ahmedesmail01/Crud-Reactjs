import "./App.css";
import ProductCard from "./components/ProductCard";
import Model from "./components/ui/Model";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 px-12 py-6 md:grid-cols-3 xl:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

        <Model />
      </div>
    </>
  );
}

export default App;
