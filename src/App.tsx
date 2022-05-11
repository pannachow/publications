import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import "bulma/css/bulma.min.css";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { getPublications, login, LoginInfo, Publications } from "./api";

function App() {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>();
  const [publications, setPublications] = useState<Publications>();

  useEffect(() => {
    login().then(setLoginInfo).catch(console.error);
  }, []);

  useEffect(() => {
    if (!loginInfo) return;
    loadPublicationsPage(loginInfo, 1);
  }, [loginInfo]);

  function loadPublicationsPage(loginInfo: LoginInfo, page: number): void {
    getPublications(loginInfo, page).then(setPublications).catch(console.error);
  }

  function PublicationsPagination() {
    return loginInfo && publications ? (
      <Pagination
        count={publications.count}
        page={publications.page}
        total={publications.total}
        onClick={(page) => loadPublicationsPage(loginInfo, page)}
      />
    ) : (
      <></>
    );
  }

  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#081E36" }}>
        <div className="container py-5">
          <PublicationsPagination />
          <div
            className="is-flex is-flex-wrap-wrap"
            style={{ gap: "20px" }}
          >
            {publications &&
              publications._embedded.edition.map((publication) => (
                <Card key={publication.identifier} publication={publication} />
              ))}
          </div>
          &nbsp;
          <PublicationsPagination />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
