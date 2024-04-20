import Banner from "./components/Banner/Banner";
import Consultations from "./components/Consultations/Consultations";
import ValidCustomers from "./components/Customers/ValidCustomers";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import Experts from "./components/Experts/Experts";
import Footer from "./components/Footer/Footer";
import Harmony from "./components/Harmony/Harmony";
import Magic from "./components/Magic/Magic";
import Approach from "./components/approach/Approach";

function App() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Magic />
      <Consultations />
      <Harmony />
      <Approach />
      <ValidCustomers />
      <Experts />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
