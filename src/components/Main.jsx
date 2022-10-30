import { useEffect, useState } from "react";
import CardInfo from "./CardInfo";
import Card from "./Card";
import "./style.css";
import axios from "axios";

function Main() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("https://randomuser.me/api/?results=24");
  const [userDex, setUserdex] = useState();

  const userData = async () => {
    const res = await axios.get(url);
    setUsers(res.data.results);
  };

  useEffect(() => {
    userData();
  }, [ url ]);

  return (
    <div className="container">
      <header className="header"></header>
      <section className="section">
        <div className="left" id="user-list">
          <nav className="nav">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="user photo"
            />
            <h2>Your Name</h2>
          </nav>
          <div className="search">
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search your Freind"
            />
          </div>
          <ul className="user-container" id="user-container">
            <Card
              users={users}
              search={search}
              infoUsers={(user) => setUserdex(user)}
            />
          </ul>
        </div>

        <div className="right" id="user-info">
          <CardInfo data={userDex} />
        </div>
      </section>
    </div>
  );
}

export default Main;
