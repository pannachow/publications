import Navbar from "./navbar";
import Card from "./card";
import Footer from "./footer";
import "bulma/css/bulma.min.css";

function App() {
  
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#081E36" }}>
        <div className="container py-5">
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
