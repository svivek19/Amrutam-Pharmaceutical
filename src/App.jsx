import Banner from "./components/Banner/Banner";
import Consultations from "./components/Consultations/Consultations";
import ValidCustomers from "./components/Customers/ValidCustomers";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import Experts from "./components/Experts/Experts";
import Harmony from "./components/Harmony/Harmony";
import Magic from "./components/Magic/Magic";
import Approach from "./components/approach/Approach";

function App() {
  return (
    <div className="mb-20 ">
      <Banner />
      <Magic />
      <Consultations />
      <Harmony />
      <Approach />
      <ValidCustomers />
      <Experts />
      <DownloadApp />
    </div>
  );
}

export default App;
