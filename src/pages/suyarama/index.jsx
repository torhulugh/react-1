import "./style.css";
import { Link } from "react-router-dom";

export default function Header({ Suyarama }) {
  return (
    <>
      <section className="brand---q-c--page">
        <img id="brand--logo" src="/img/T.H.Asset 19vande.png" alt="" />
        <h1 className="brand--h1"> Suyarama</h1>
        <h3 className="brand--info">
          We bring the rich flavors and vibrant culture of West African street food
          to Canada through authentic recipes, warm hospitality, and
          unforgettable dining experiences that make everyone feel at home.
        </h3>

        <Link className="brand--link" to="https://www.instagram.com/suya_rama/">
          <img src="/img/instagram-icn.svg" alt="" />
          <p>follow suyarama on Instagram</p>
        </Link>
        <Link className="brand--link" to="https://www.tiktok.com/@nguvendan4444">
          <img src="" alt="" />
          <p>follow suyarama on TikTok</p>
        </Link>
        <h2 className="brand--h2" >  Menu </h2>
        <img className="menu--img" src="/img/sunfest.jpeg" alt="" />
      </section>
    </>
  );
}
