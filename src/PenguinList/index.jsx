import PropTypes from "prop-types";

export default function PenguinList({ penguins }) {
  return (
    <>
      <div className="profile-feed">
        {penguins.map((penguin, index) => (
          <li key={index} className="profile-li">
            <div className="profile-container">
              <div className="profile-img">
                {console.log(penguin.pictureUrl)}
                <img src={penguin.pictureUrl} alt="penguin" />
              </div>

              <div className="profile-info">
                {penguin ? <p>{"Name: " + penguin.username}</p> : <p>?</p>}
                {penguin ? (
                  <p>{"First appearence: " + penguin.firstAppearance}</p>
                ) : (
                  <p>?</p>
                )}
                {penguin ? (
                  <p>{"Most Recent Giveaway: " + penguin.mostRecentGiveaway}</p>
                ) : (
                  <p>?</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </div>
    </>
  );
}

PenguinList.propTypes = {
  penguins: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      firstAppearance: PropTypes.string,
      mostRecentGiveaway: PropTypes.string,
      pictureUrl: PropTypes.string,
    })
  ),
};
