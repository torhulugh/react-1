import "./style.css";

export default function Freebies() {
  return (
    <section id="freebies--cards--container">
      {/* my works header */}
      <div id="myWorks-header-container">
        <img id="myWorks-header-icn" src="/icn/Freebies-icon.svg" alt="" />
        <h3 id="myWorks-header-txt">Freebies</h3>
      </div>
      {/* Desktop wallpapers */}
      <div className="freebie--card">
        <img
          src="/img/fav-dwall.png"
          alt=""
          className="freebie--featured--img--slide"
        />
        <div className="freebie--card--bottom--section">
          <div className="freebies--card--title-container">
            <h2 className="freebies--card--title">Desktop Wallpapers</h2>
            <img
              className="freebies--arrow-icn"
              src="/icn/enter-arrow.svg"
              alt=""
            />
          </div>
          <div className="freebie--card--navigation">
            <button className="freebie--card--btn--prev">
              <img src="/icn/prev-icn.svg" alt="" />
            </button>
            <button className="freebie--card--btn-nxt">
              <img src="/icn/nxt-icn.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="free--blur--effect"></div>
      </div>
      {/* Mobile wallpapers */}
      <div className="freebie--card">
        <img
          src="/img/african-mask-wall.png"
          alt=""
          className="freebie--featured--img--slide"
        />
        <div className="freebie--card--bottom--section">
          <div className="freebies--card--title-container">
            <h2 className="freebies--card--title">Mobile Wallpapers</h2>
            <img
              className="freebies--arrow-icn"
              src="/icn/enter-arrow.svg"
              alt=""
            />
          </div>
          <div className="freebie--card--navigation">
            <button className="freebie--card--btn--prev">
              <img src="/icn/prev-icn.svg" alt="" />
            </button>
            <button className="freebie--card--btn-nxt">
              <img src="/icn/nxt-icn.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="free--blur--effect"></div>
      </div>
      {/* icon packs */}
      <div className="freebie--card">
        <img
          src="/img/grass-pillars.png"
          alt=""
          className="freebie--featured--img--slide"
        />
        <div className="freebie--card--bottom--section">
          <div className="freebies--card--title-container">
            <h2 className="freebies--card--title">Icon Packs</h2>
            <img
              className="freebies--arrow-icn"
              src="/icn/enter-arrow.svg"
              alt=""
            />
          </div>
          <div className="freebie--card--navigation">
            <button className="freebie--card--btn--prev">
              <img src="/icn/prev-icn.svg" alt="" />
            </button>
            <button className="freebie--card--btn-nxt">
              <img src="/icn/nxt-icn.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="free--blur--effect"></div>
      </div>
      {/* web apps */}
      <div className="freebie--card">
        <img
          src="/img/the blensd.png"
          alt=""
          className="freebie--featured--img--slide"
        />
        <div className="freebie--card--bottom--section">
          <div className="freebies--card--title-container">
            <h2 className="freebies--card--title">Web apps</h2>
            <img
              className="freebies--arrow-icn"
              src="/icn/enter-arrow.svg"
              alt=""
            />
          </div>
          <div className="freebie--card--navigation">
            <button className="freebie--card--btn--prev">
              <img src="/icn/prev-icn.svg" alt="" />
            </button>
            <button className="freebie--card--btn-nxt">
              <img src="/icn/nxt-icn.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="free--blur--effect"></div>
      </div>
      {/* Games */}
      <div className="freebie--card">
        <img
          src="/img/bike-man.png"
          alt=""
          className="freebie--featured--img--slide"
        />
        <div className="freebie--card--bottom--section">
          <div className="freebies--card--title-container">
            <h2 className="freebies--card--title">Games</h2>
            <img
              className="freebies--arrow-icn"
              src="./icn/enter-arrow.svg"
              alt=""
            />
          </div>
          <div className="freebie--card--navigation">
            <button className="freebie--card--btn--prev">
              <img src="./icn/prev-icn.svg" alt="" />
            </button>
            <button className="freebie--card--btn-nxt">
              <img src="./icn/nxt-icn.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="free--blur--effect"></div>
      </div>
      {/* Components */}
      <div className="freebie--card">
        <img
          src="/img/compo.png"
          alt=""
          className="freebie--featured--img--slide"
        />
        <div className="freebie--card--bottom--section">
          <div className="freebies--card--title-container">
            <h2 className="freebies--card--title">Components</h2>
            <img
              className="freebies--arrow-icn"
              src="./icn/enter-arrow.svg"
              alt=""
            />
          </div>
          <div className="freebie--card--navigation">
            <button className="freebie--card--btn--prev">
              <img src="/icn/prev-icn.svg" alt="" />
            </button>
            <button className="freebie--card--btn-nxt">
              <img src="/icn/nxt-icn.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="free--blur--effect"></div>
      </div>
    </section>
  );
}
