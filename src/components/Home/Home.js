import { useState, useEffect } from "react";
import Card from "./Card/Card";
import { sortAscending } from "../../util/sort";

const HomePage = () => {
  const [playerList, setPlayerList] = useState([]);
  const [filteredPlayerList, setFilteredPlayerList] = useState([]);
  const [filteredByTeamName, setFilteredByTeamName] = useState([]);
  const [teamsList, setTeamsList] = useState([]);
  const [searchPlayers, setSearchPlayers] = useState("");
  const [searchByTeamName, setSearchByTeamName] = useState("");

  useEffect(() => {
    async function fetchPlayers() {
      const response = await fetch(
        `https://api.npoint.io/20c1afef1661881ddc9c`
      );
      const data = await response.json();
      setPlayerList(sortAscending(data.playerList));
      setTeamsList(data.teamsList);
    }

    fetchPlayers();
  }, []);

  const searchItems = (searchValue) => {
    setSearchPlayers(searchValue);
    if (searchPlayers !== "") {
      let filteredData = playerList.filter((value) => {
        return (
          value.PFName.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        );
      });
      setFilteredPlayerList(filteredData);
    } else {
      setFilteredPlayerList(playerList);
    }
  };

  const searchTeams = (searchValue) => {
    setSearchByTeamName(searchValue);
    if (searchByTeamName !== "") {
      let filteredData = playerList.filter((value) => {
        return (
          value.TName.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        );
      });
      setFilteredByTeamName(filteredData);
    } else {
      setFilteredByTeamName(playerList);
    }
  };

  return (
    <div className="container">
      <div>
        <h2>Players List</h2>
        <div className="search-container">
          <div>
            <span>Search by Player Name: </span>
            <input
              placeholder="Search.."
              onChange={(e) => searchItems(e.target.value)}
              style={{ margin: "15px 0", height: "25px" }}
              size={25}
            />
          </div>

          <div>
            <span>Search by Team Name: </span>
            <input
              placeholder="Search.."
              onChange={(e) => searchTeams(e.target.value)}
              style={{ margin: "15px 0", height: "25px" }}
              size={25}
            />
          </div>
        </div>
      </div>
      <div className="grid-container">
        {searchPlayers.length > 1
          ? filteredPlayerList &&
            filteredPlayerList.length > 0 &&
            filteredPlayerList.map((player) => {
              return <Card player={player} />;
            })
          : searchByTeamName.length > 1
          ? filteredByTeamName &&
            filteredByTeamName.length > 0 &&
            filteredByTeamName.map((player) => {
              return <Card player={player} />;
            })
          : playerList &&
            playerList.length > 0 &&
            playerList.map((player) => {
              return <Card player={player} />;
            })}
      </div>
    </div>
  );
};

export default HomePage;
