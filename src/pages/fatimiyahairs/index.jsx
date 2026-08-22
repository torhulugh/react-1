import "./style.css";
import { Link } from "react-router-dom";

export default function Header({ Fatimiyahairs }) {
  return (
    <>
      <section className="brand---q-c--page">
        <img className="brand--logo fatimiya" src="/img/Fatimya-cover-banner.png" alt="" />
        <h3 className="brand--info">
          Fatimiya Hair is a beauty brand dedicated to creating beautiful, confident looks through expert hair styling and care. From elegant event styling and natural hair looks to intricate braids, twists, weaving, and dreadlock retightening, we bring creativity, precision, and personal style to every appointment.

        </h3>
        <secttion className="brand--links--container">
          <Link className="brand--link fatimiya instagram" to="https://www.instagram.com/fatimiyahair/">
          <img src="/img/instagram-true.png" alt="" />
          <p>follow us on Instagram</p>
        </Link>
        <Link className="brand--link fatimiya tiktok" to="https://www.tiktok.com/@fatimiya_hair">
          <img src="/img/tiktok-true.png" alt="" />
          <p>follow us on TikTok</p>
        </Link>
        </secttion>

        
        <h2 className="brand--h2 fatimiyahairs" >  Our Services </h2>
        <ul>
          <li> Hair Weaving </li>
          <li>Event Hair Styling</li>
          <li>Event Hair Styling</li>
        </ul>
        <ul>
          <li>Twists</li>
          <li>Braiding</li>
          <li>Dreadlock Retightening</li>
        </ul>
      </section>
    </>
  );
}
