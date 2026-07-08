import "./style.css";
import { Link } from "react-router-dom";

export default function Header({ Suyarama }) {
  return (
    <>
      <section className="brand---q-c--page">
        <img id="brand--logo" src="/img/T.H.Asset 19vande.png" alt="" />
        <h1>Suyarama</h1>
        <h2 className="brand--info">
          bring the rich flavors and vibrant culture of West African street food
          to Canada through authentic recipes, warm hospitality, and
          unforgettable dining experiences that make everyone feel at home.
        </h2>

        <Link className="Brand--link" to="/suyarama">
          <img src="/img/instagram-icn.svg" alt="" />
          <p>follow suyarama on Instagram</p>
        </Link>
        <Link className="Brand--link" to="/suyarama">
          <img src="" alt="" />
          <p>follow suyarama on TikTok</p>
        </Link>
        <Link className="Brand--link" to="/suyarama">
          <img src="" alt="" />
          <p>Veiw Our menu</p>
        </Link>
      </section>
    </>
  );
}
