import Banner from "./components/Banner/Banner";
import Consultations from "./components/Consultations/Consultations";
import ValidCustomers from "./components/Customers/ValidCustomers";
import Harmony from "./components/Harmony/Harmony";
import Magic from "./components/Magic/Magic";
import Approach from "./components/approach/Approach";

function App() {
  return (
    <div className="max-w-7xl mx-auto mb-20 ">
      <Banner />
      <Magic />
      <Consultations />
      <Harmony />
      <Approach />
      <ValidCustomers />
    </div>
  );
}

export default App;
