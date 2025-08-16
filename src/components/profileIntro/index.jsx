import "./profileIntro.css";

export default function Profile_Intro() {
  return (
 
    <section id="intro--nd--myWorksCategories">
        <img id="grid--bacground--img" src="img/grid-bg.png" alt=""  />
        <img id="starBacklight--bacground--img" src="img/stars-backlight-bg.png" alt=""  />
        <div id="intro-profile-continer">
          <img
            id="intro--profile--img"
            src="img/home pf imag.png"
            alt="designers picture"
          />
          <p id="intro--txt">
            Hi! Welcome!, I am<em>Tor Hulugh</em>, a web developer with a background in
            design. This is my personly hand crafted space, where I share my work, passion projects,
             and the ideas that inspire them. Feel free to explore, and if you like what you see,
            don't hesitate to reach out.✏️
          </p>
        </div>
        {/* <!-- <<<<>>>> my work category section <<<<>>>> --> */}
        <div id="myWork--category--container">
          {/* <!--  my work category section header --> */}
          <div class="squircleStyle--header">
            <img
            class="squircleStyle--header--icn"
            src="icn/my-works-icn.svg"
            alt="star icon for recent activities section header"
          />
            <p class="squircleStyle--header--title">My work categories</p>
          </div>
          {/* <!-- 🍇 --> */}
          <div class="divider"></div>
          {/* <!-- 🍇 --> */}
          {/* <!--  my work category icons --> */}
          <div id="myWork--categoryIcons--container">
            {/* <!-- three icons containers --> */}
            <div class="categoryTriIcons--container">
              {/* <!-- graphic design --> */}
            <a class="myWork--categoryIcon--link" href="">
            <img
              class="myworkCategoryIcon"
              src="icn/graphicdesign-icon.svg"
              alt="graphic design icon"/>
            <img class="myworkCategoryIcon--backdrop" 
            src="icn/cat-icon-shadow.svg" alt="cartegory icon shadow"/>
            </a>
            {/* <!-- 🍇 --> */}
            {/* <!-- Illustration/Art --> */}
            <a class="myWork--categoryIcon--link"  href="">
            <img
              class="myworkCategoryIcon"
              src="icn/illustration-icon.svg"
              alt="illustration icon"/>
              <img class="myworkCategoryIcon--backdrop" 
            src="icn/cat-icon-shadow.svg" alt="cartegory icon shadow"/>
            </a>
            {/* <!-- 🍇 --> */}
             {/* <!-- ui/ux design --> */}
            <a class="myWork--categoryIcon--link" href="">
            <img class="myworkCategoryIcon" 
            src="icn/uxdesigner-icon.svg" 
            alt="ui/ux design icon" />
            <img class="myworkCategoryIcon--backdrop" 
            src="icn/cat-icon-shadow.svg" alt="cartegory icon shadow"/>
            </a>
            {/* <!-- 🍇 --> */}
            </div>
            {/* <!-- 🍇🍇 --> */}
            <div class="categoryTriIcons--container">
             {/* <!-- motion graphics --> */}
            <a class="myWork--categoryIcon--link" href="">
            <img
              class="myworkCategoryIcon"
              src="icn/motiongraphic-icon.svg"
              alt="motion graphic icon"/>
              <img class="myworkCategoryIcon--backdrop" 
            src="icn/cat-icon-shadow.svg" alt="cartegory icon shadow"/>
            </a>
            {/* <!-- 🍇 --> */}
             {/* <!-- fashion design --> */}
            <a class="myWork--categoryIcon--link" href="">
            <img
              class="myworkCategoryIcon"
              src="icn/fashiondesign-icon.svg"
              alt=" fashion design icon"/>
              <img class="myworkCategoryIcon--backdrop" 
            src="icn/cat-icon-shadow.svg" alt="cartegory icon shadow"/>
            </a>
            {/* <!-- 🍇 --> */}
             {/* <!-- code craft --> */}
             <a class="myWork--categoryIcon--link" href="">
            <img class="myworkCategoryIcon" 
            src="icn/code craft.svg" 
            alt=" code craft icon" />
            <img class="myworkCategoryIcon--backdrop" 
            src="icn/cat-icon-shadow.svg" alt="cartegory icon shadow"/>
            </a>
            </div>
            {/* <!-- 🍇🍇 --> */}
          </div>
        </div>
      </section>
    
  )
}