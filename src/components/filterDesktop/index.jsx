import "./style.css";

export default function Header() {
  return (
    <section id="content--filter">
        <div id="filter--btn">
          <img src="/icn/filter-icon.png" alt="" id="filter--icon"/>
        </div>
        <div id="filter--options--container">
        {/* <!-- 🍇 --> */}
        <a className="filter--capuslecard--link" href="pages/portfolio/web-dev.html">
          <div className="filter--capsule--card">
            <div className="filter--capsuleCard-foreground-grad"></div>
            <div className="filter--capsuleCard-background"></div>
            <div className="filter--capsuleCard-backdrop-grad"></div>
            <div className="filter--capsule--img--background">
             <img className="filter--capsuleCard-img" 
             src="/icn/graphic-design--category-icon.png" 
             alt="" /> 
            </div>
              <p>Graphic design</p>
          </div>
        </a>
        {/* <!-- 🍇 --> */}
        <a className="filter--capuslecard--link" href="pages/portfolio/web-dev.html">
          <div className="filter--capsule--card">
            <div className="filter--capsuleCard-foreground-grad"></div>
            <div className="filter--capsuleCard-background"></div>
            <div className="filter--capsuleCard-backdrop-grad"></div>
            <div className="filter--capsule--img--background">
             <img className="filter--capsuleCard-img" 
             src="/icn/illustration--category-icon.png" 
             alt="" /> 
            </div>
              <p>Illustration</p>
          </div>
        </a>
        {/* <!-- 🍇 --> */}
        <a className="filter--capuslecard--link" href="pages/portfolio/web-dev.html">
          <div className="filter--capsule--card">
            <div className="filter--capsuleCard-foreground-grad"></div>
            <div className="filter--capsuleCard-background"></div>
            <div className="filter--capsuleCard-backdrop-grad"></div>
            <div className="filter--capsule--img--background">
             <img className="filter--capsuleCard-img" 
             src="/icn/ui--ux-caategory-icon.png" 
             alt="" /> 
            </div>
              <p>Ui/ux dseign</p>
          </div>
        </a>
        {/* <!-- 🍇 --> */}
        <a className="filter--capuslecard--link" href="pages/portfolio/web-dev.html">
          <div className="filter--capsule--card">
            <div className="filter--capsuleCard-foreground-grad"></div>
            <div className="filter--capsuleCard-background"></div>
            <div className="filter--capsuleCard-backdrop-grad"></div>
            <div className="filter--capsule--img--background">
             <img className="filter--capsuleCard-img" 
             src="/icn/motion-ghx--category-icon.png" 
             alt="" /> 
            </div>
              <p>Motion GHX</p>
          </div>
        </a>
        {/* <!-- 🍇 --> */}
        <a className="filter--capuslecard--link" href="pages/portfolio/web-dev.html">
          <div className="filter--capsule--card">
            <div className="filter--capsuleCard-foreground-grad"></div>
            <div className="filter--capsuleCard-background"></div>
            <div className="filter--capsuleCard-backdrop-grad"></div>
            <div className="filter--capsule--img--background">
             <img className="filter--capsuleCard-img" 
             src="/icn/fashiondesign-icon.svg" 
             alt="" /> 
            </div>
              <p>fashion Design</p>
          </div>
        </a>
        {/* <!-- 🍇 --> */}
        <a className="filter--capuslecard--link" href="pages/portfolio/web-dev.html">
          <div className="filter--capsule--card">
            <div className="filter--capsuleCard-foreground-grad"></div>
            <div className="filter--capsuleCard-background"></div>
            <div className="filter--capsuleCard-backdrop-grad"></div>
            <div className="filter--capsule--img--background">
             <img className="filter--capsuleCard-img" 
             src="/icn/codecrafte--category--icon.png" 
             alt="" /> 
            </div>
              <p>Code craft</p>
          </div>
        </a>
        {/* <!-- 🍇 --> */}
        </div>
      </section>
  )
}