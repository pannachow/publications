import "bulma/css/bulma.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import {
  getPublications,
  login,
  LoginInfo,
  Publication,
  Publications,
  PublicationStatus,
} from "./api";
import Card from "./components/Card";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

export default function App() {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>();

  const [publications, setPublications] = useState<Publications>();
  const [statusFilter, setStatusFilter] = useState<PublicationStatus>();
  const [nameSearch, setNameSearch] = useState<string>("");

  const [selectedPublication, setSelectedPublication] = useState<Publication>();

  useEffect(() => {
    login().then(setLoginInfo).catch(console.error);
  }, []);

  useEffect(() => {
    if (!loginInfo) return;
    loadPublicationsPage(loginInfo, 1, nameSearch, statusFilter);
  }, [loginInfo, statusFilter, nameSearch]);

  function loadPublicationsPage(
    loginInfo: LoginInfo,
    page: number,
    nameSearch: string,
    statusFilter?: PublicationStatus
  ): void {
    getPublications(loginInfo, page, nameSearch, statusFilter)
      .then(setPublications)
      .catch(console.error);
  }

  function PublicationsPagination() {
    return loginInfo && publications ? (
      <Pagination
        count={publications.count}
        page={publications.page}
        total={publications.total}
        onClick={(page) =>
          loadPublicationsPage(loginInfo, page, nameSearch, statusFilter)
        }
      />
    ) : (
      <></>
    );
  }

  return (
    <div
      className="is-flex is-flex-direction-column"
      style={{ minHeight: "100vh" }}
    >
      <Navbar />
      <div className="is-flex-grow-1" style={{ backgroundColor: "#081E36" }}>
        <div className="container py-5">
          <div
            className="is-flex is-flex-wrap-wrap is-justify-content-space-between is-align-content-center is-mobile-flex-direction-column is-mobile-align-items-center"
            style={{ gap: "20px" }}
          >
            <PublicationsPagination />
            <Search onChange={(value) => setNameSearch(value)} />
            <Filter
              onChange={(status) =>
                status === "all"
                  ? setStatusFilter(undefined)
                  : setStatusFilter(status)
              }
            />
          </div>
          <div
            className="is-flex is-flex-wrap-wrap is-mobile-flex-direction-column is-mobile-align-items-center"
            style={{ gap: "20px" }}
          >
            {publications &&
              publications._embedded.edition.map((publication) => (
                <Card
                  key={publication.identifier}
                  publication={publication}
                  onClick={() => setSelectedPublication(publication)}
                />
              ))}
          </div>
          &nbsp;
          <PublicationsPagination />
        </div>
      </div>
      <Footer />
      {selectedPublication && (
        <Modal
          publication={selectedPublication}
          onClose={() => setSelectedPublication(undefined)}
        />
      )}
    </div>
  );
}
