import Navbar from "./navbar";
import Card from "./Card";
import Footer from "./Footer";
import "bulma/css/bulma.min.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const url = "https://api.foleon.com/oauth";
    const url2 = "https://api.foleon.com/v2/magazine/edition?page=1&limit=20";
    const body = {
      grant_type: "client_credentials",
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();

        const response2 = await fetch(url2, {
          method: "GET",
          headers: {
            Authorization: `${json.token_type} ${json.access_token}`,
          },
        });
        const json2 = await response2.json();
        setData(json2);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#081E36" }}>
        <div
          className="container py-5 is-flex is-flex-wrap-wrap"
          style={{ gap: "20px" }}
        >
          {data &&
            data._embedded.edition.map((publication: any) => (
              <Card key={publication.identifier} publication={publication} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
