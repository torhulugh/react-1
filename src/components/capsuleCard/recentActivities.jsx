import "./capsuleCard.css";

export default function RecentActivities() {
  return (
    <section id="recentAcivities--container">
      {/* Recent activities section header */}
      <div className="squircleStyle--header">
        <img
          className="squircleStyle--header--icn"
          src="icn/favourite-icon.svg"
          alt="star icon for recent activities section header"
        />
        <p className="squircleStyle--header--title">Recent Activities</p>
      </div>
      {/* capsule cards container */}
      <div className="capsuleCards--Container">
        {/* capsule card 1 */}
        <a className="capuslecard--link" href="">
          <div className="capsule--card">
            <div className="capsuleCard-foreground-grad"></div>
            <div className="capsuleCard-background"></div>
            <div className="capsuleCard-backdrop-grad"></div>
            <img
              className="capsuleCard-img"
              src="featured-img/Trusi.png"
              alt=""
            />
            <div className="capsuleCard-txt">
              <h4>Trusi website design:</h4>
              <p className="capsuleCard-discription">
                A futuristic modern minimalist website design, as sophistication
                marries simplicity.
              </p>
            </div>
          </div>
        </a>
        {/* capsule card 2 */}
        <a className="capuslecard--link" href="">
          <div className="capsule--card">
            <div className="capsuleCard-foreground-grad"></div>
            <div className="capsuleCard-background"></div>
            <div className="capsuleCard-backdrop-grad"></div>
            <img
              className="capsuleCard-img"
              src="featured-img/vmac.png"
              alt=""
            />
            <div className="capsuleCard-txt">
              <h4>Visual Magic Content:</h4>
              <p className="capsuleCard-discription">
                simplifying asset library web experience focused on the needs of
                modern day users.
              </p>
            </div>
          </div>
        </a>
        {/* capsule card 3 */}
        <a className="capuslecard--link" href="">
          <div className="capsule--card">
            <div className="capsuleCard-foreground-grad"></div>
            <div className="capsuleCard-background"></div>
            <div className="capsuleCard-backdrop-grad"></div>
            <img
              className="capsuleCard-img"
              src="featured-img/linkmaiden.png"
              alt=""
            />
            <div className="capsuleCard-txt">
              <h4>Linkmaidien:</h4>
              <p className="capsuleCard-discription">
                An efficient, aesthetic and satisfying link management tool.
                designed and built to meet user needs and desires
              </p>
            </div>
          </div>
        </a>
        {/* capsule card 4 */}
        <a className="capuslecard--link" href="">
          <div className="capsule--card">
            <div className="capsuleCard-foreground-grad"></div>
            <div className="capsuleCard-background"></div>
            <div className="capsuleCard-backdrop-grad"></div>
            <img
              className="capsuleCard-img"
              src="featured-img/circle of visom.png"
              alt=""
            />
            <div className="capsuleCard-txt">
              <h4>Circle of Vision:</h4>
              <p className="capsuleCard-discription">
                Designing an inclusive world, that listens and speaks to all
                individual users.
              </p>
            </div>
          </div>
        </a>
        {/* capsule card 5 */}
        <a className="capuslecard--link" href="">
          <div className="capsule--card">
            <div className="capsuleCard-foreground-grad"></div>
            <div className="capsuleCard-background"></div>
            <div className="capsuleCard-backdrop-grad"></div>
            <img className="capsuleCard-img" src="img/PR0JECT 365.png" alt="" />
            <div className="capsuleCard-txt">
              <h4>Project 365 Website:</h4>
              <p className="capsuleCard-discription">
                Re-imaginging music streaming campaigning's and new musical
                talent discovery.
              </p>
            </div>
          </div>
        </a>
        {/* capsule card 6 */}
        <a className="capuslecard--link" href="">
          <div className="capsule--card">
            <div className="capsuleCard-foreground-grad"></div>
            <div className="capsuleCard-background"></div>
            <div className="capsuleCard-backdrop-grad"></div>
            <img
              className="capsuleCard-img"
              src="featured-img/STARBUCKS.png"
              alt=""
            />
            <div className="capsuleCard-txt">
              <h4>Starbucks siren:</h4>
              <p className="capsuleCard-discription">
                Awakening the siren queen, to further allure the world with her
                enchanting beauty and irresistible charm.
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
