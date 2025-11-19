import "./style.css";

export default function Gallery() {
  return ( 
  <>
      <section id="favourites--container">
        <div class="squircleStyle--header">
          <img
            class="squircleStyle--header--icn"
            src="icn/favourite-icon.svg"
            alt="star icon for recent activities section header"
          />
          <p class="squircleStyle--header--title">favourites</p>
        </div>
        {/* <!-- ----------------------------- capsule cards container ---------------------------- --> */}
        <div id="imgGlassDunes--Container">
          {/* <!-- ----------------------------- img 1 ---------------------------- --> */}
          <div class="imgGlassDune">
            <div class="imgGlassDune-foreground-grad"></div>
            <div class="imgGlassDune-background"></div>
            <div class="imgGlassDune-backdrop-grad"></div>
            <img class="imgGlassDune-img" src="img/akbe.png" alt="" />
          </div>
          {/* <!-- ----------------------------- img 2 ---------------------------- --> */}
          <div class="imgGlassDune">
            <div class="imgGlassDune-foreground-grad"></div>
            <div class="imgGlassDune-background"></div>
            <div class="imgGlassDune-backdrop-grad"></div>
            <img class="imgGlassDune-img" src="img/DAG2.png" alt="" />
            </div>
            {/* <!-- ----------------------------- img 3 ---------------------------- --> */}
            <div class="imgGlassDune">
              <div class="imgGlassDune-foreground-grad"></div>
              <div class="imgGlassDune-background"></div>
              <div class="imgGlassDune-backdrop-grad"></div>
              <img class="imgGlassDune-img" src="img/adasu.png" alt="" />
            </div>
            {/* <!-- ----------------------------- img 4 ---------------------------- --> */}
            <div class="imgGlassDune">
              <div class="imgGlassDune-foreground-grad"></div>
              <div class="imgGlassDune-background"></div>
              <div class="imgGlassDune-backdrop-grad"></div>
              <img class="imgGlassDune-img" src="img/ZANARIA.png" alt="" />
            </div>
            {/* <!-- ----------------------------- img 5 ---------------------------- --> */}
            <div class="imgGlassDune">
              <div class="imgGlassDune-foreground-grad"></div>
              <div class="imgGlassDune-background"></div>
              <div class="imgGlassDune-backdrop-grad"></div>
              <img class="imgGlassDune-img" src="img/VG.png" alt="" />
            </div>
            {/* <!-- ----------------------------- img 6 ---------------------------- --> */}
            <div class="imgGlassDune">
              <div class="imgGlassDune-foreground-grad"></div>
              <div class="imgGlassDune-background"></div>
              <div class="imgGlassDune-backdrop-grad"></div>
              <img class="imgGlassDune-img" src="img/VG.png" alt="" />
            </div>
          </div>
        </section>
  
  </>
 
    
    
  )
}