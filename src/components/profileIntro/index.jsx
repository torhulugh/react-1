import "./style.css";

export default function Profile_Intro() {
  return (
 
    <section id="intro--nd--myWorksCategories">
        <img id="grid--bacground--img" src="img/grid-bg.png" alt=""  />
        <img id="starBacklight--bacground--img" src="img/stars-backlight-bg.png" alt=""  />
        {/* <<<<>>>> intro profile section <<<<>>>>*/}
        <div id="intro-profile-continer">
          <div id="intro--profile--img--container">
          <img
            id="intro--profile--img"
            src="img/home pf imag.png"
            alt="designers picture"
          />
          <img id="animated--avatar" src="img/animated-avatar.gif" alt="animated avatar" />
        </div>
          <p id="intro--txt">
            Hello! and Welcome!, I am<em>Tor Hulugh</em>, a web developer with a background in
            design. This is my personally hand crafted space, where I share my work, passion projects, products and freebies, please
            Feel free to look around and explore.
          </p>
        </div>
        {/* <<<<>>>> my work category section <<<<>>>> */}
        <div id="myWork--category--container">
          {/*  my work category section header */}
          <div className="squircleStyle--header">
            <img
            className="squircleStyle--header--icn"
            src="icn/my-works-icn.svg"
            alt="star icon for recent activities section header"
          />
            <p className="squircleStyle--header--title">My work categories</p>
          </div>
          {/* <!-- 🍇 --> */}
          <div className="divider"></div>
          {/* <!-- 🍇 --> */}
          {/* <!--  my work category icons --> */}
          <div id="myWork--categoryIcons--container">
            {/* <!-- three icons containers --> */}
            <div className="categoryTriIcons--container">
              {/* graphic design */}
            <a className="myWork--categoryIcon--link" href="">
            <img
              className="myworkCategoryIcon"
              src="icn/graphicdesign-icon.svg"
              alt="graphic design icon"/>
            <img className="myworkCategoryIcon--backdrop" 
            src="icn/cat-icon-shadow.svg" alt="cartegory icon shadow"/>
            </a>
            {/* 🍇 */}
            {/* Illustration/Art */}
            <a className="myWork--categoryIcon--link"  href="">
            <img
              className="myworkCategoryIcon"
              src="icn/illustration-icon.svg"
              alt="illustration icon"/>
              <img className="myworkCategoryIcon--backdrop" 
            src="icn/cat-icon-shadow.svg" alt="cartegory icon shadow"/>
            </a>
            {/* 🍇 */}
             {/* ui/ux design */}
            <a className="myWork--categoryIcon--link" href="">
            <img className="myworkCategoryIcon" 
            src="icn/uxdesigner-icon.svg" 
            alt="ui/ux design icon" />
            <img className="myworkCategoryIcon--backdrop" 
            src="icn/cat-icon-shadow.svg" alt="cartegory icon shadow"/>
            </a>
            {/* 🍇 */}
            </div>
            {/* 🍇🍇 */}
            <div className="categoryTriIcons--container">
             {/* motion graphics */}
            <a className="myWork--categoryIcon--link" href="">
            <img
              className="myworkCategoryIcon"
              src="icn/motiongraphic-icon.svg"
              alt="motion graphic icon"/>
              <img className="myworkCategoryIcon--backdrop" 
            src="icn/cat-icon-shadow.svg" alt="cartegory icon shadow"/>
            </a>
            {/* 🍇 */}
             {/* fashion design */}
            <a className="myWork--categoryIcon--link" href="">
            <img
              className="myworkCategoryIcon"
              src="icn/fashiondesign-icon.svg"
              alt=" fashion design icon"/>
              <img className="myworkCategoryIcon--backdrop" 
            src="icn/cat-icon-shadow.svg" alt="cartegory icon shadow"/>
            </a>
            {/* 🍇 */}
             {/* code craft */}
             <a className="myWork--categoryIcon--link" href="">
            <img className="myworkCategoryIcon" 
            src="icn/code craft.svg" 
            alt=" code craft icon" />
            <img className="myworkCategoryIcon--backdrop" 
            src="icn/cat-icon-shadow.svg" alt="cartegory icon shadow"/>
            </a>
            </div>
            {/* 🍇🍇 */}
          </div>
        </div>
      </section>
    
  )
}