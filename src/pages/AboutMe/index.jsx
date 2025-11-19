import "./style.css";

export default function AboutMe() {
  return (
    <> 
     <section id="about--into--container">
      <div>
        <h1>About Tor Hulugh</h1>
        <p id="about--intro--txt contact-container">
        This body of text gives a more in-deep insight 
        about my journey into the design world, 
        starting from my early childhood days to the present day
        </p>
      </div>
      
      <img src="./img/about--img.png" alt=""/>
     </section>
     <section id="about--accordian">
      <div className="about--accordian--entire">
        <div className="about--accordian--header">
          <div className="about--accordian--icon" ></div>
          <h3 className="about--accordian--title">Early Childhood</h3>
          <div className="accordian--header--line"></div>
          <h2>0000</h2>

        </div>
        
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus euismod consequat purus vitae sagittis. 
            Aliquam aliquam turpis vitae purus ultrices, 
            id rhoncus purus lobortis. Morbi id bibendum massa, 
            vitae congue massa. Donec vulputate interdum interdum. 
            Aenean lacus nibh, ultricies lacinia pulvinar a, 
            blandit non orci. Morbi sodales ante odio, 
            quis maximus mauris molestie sit amet. 
            Orci varius natoque penatibus et magnis dis parturient montes, 
            nascetur ridiculus mus. Nulla facilisi. Vestibulum at blandit lorem, sed ultricies ligula. Mauris egestas mattis lectus, in fringilla orci ultrices et. Mauris maximus lacus ante, et maximus massa scelerisque et. Morbi venenatis ex sit amet velit aliquet lacinia. Aenean efficitur eleifend ipsum, a commodo magna dapibus vel.</p>
      </div>
     </section>
    </>
 
    
    
  )
}