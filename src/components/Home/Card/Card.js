import "./Card.css";
import {
  strToDate,
  combineDateTime,
  dateStr,
} from "../../../util/localedatetime";

const Card = ({ player }) => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={`player-images/${player.Id}.jpg`} alt="player" />
      </div>
      <div>
        <h2>{player.PFName}</h2>
        <p className="text-center" style={{ display: "none" }}>
          {player.TName}
        </p>
        <p className="text-center">{player.SkillDesc}</p>
        <p className="text-center">${player.Value}</p>
      </div>
      <div>
        <p className="text-center">
          Upcoming Match: {player.UpComingMatchesList[0].CCode} vs{" "}
          {player.UpComingMatchesList[0].VsCCode}
        </p>
        <p className="text-center">
          Match Timings: {player.UpComingMatchesList[0]?.MDate}
          {/* Match Timings:{" "}
          {combineDateTime(
            strToDate(`${player.UpComingMatchesList[0]?.MDate} UTC`)
          )} */}
        </p>
      </div>
    </div>
  );
};

export default Card;
