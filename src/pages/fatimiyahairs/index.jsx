import "./style.css";
import { Link } from "react-router-dom";

export default function Header({ Fatimiyahairs }) {
  return (
    <>
      <section className="brand---q-c--page">
        <img className="brand--logo" src="/img/T.H.Asset 12vande.png" alt="" />
        <h1 className="brand--h1"> Fatimiyahairs</h1>
        <h3 className="brand--info">
          We bring the rich flavors and vibrant culture of Nigerian street food
          to Canada through authentic recipes, warm hospitality, and
          unforgettable dining experiences that make everyone feel at home.
        </h3>
        <secttion className="brand--links--container">
          <Link className="brand--link instagram" to="https://www.instagram.com/suya_rama/">
          <img src="/img/instagram-true.png" alt="" />
          <p>follow suyarama on Instagram</p>
        </Link>
        <Link className="brand--link tiktok" to="https://www.tiktok.com/@nguvendan4444">
          <img src="/img/tiktok-true.png" alt="" />
          <p>follow suyarama on TikTok</p>
        </Link>
        </secttion>

        
        <h2 className="brand--h2" >  Menu </h2>
        <img className="menu--img" src="/img/sunfest.jpeg" alt="" />
      </section>
    </>
  );
}
