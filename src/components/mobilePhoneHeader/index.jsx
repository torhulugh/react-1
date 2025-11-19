import "./style.css";

export default function MobilePhoneHeader() {
  return (
    <header id="mobile--header">
      <nav id="mobile--navbar">
        <div id="mHeader--left--button">
          <img src="icn/light-mode-MH.svg" alt="" />
          <p>Light Mode</p>
        </div>
        <a id="mHeader--logo" href="/">
          <img src="/img/site-logo-TH.png" alt=""
        /></a>
        <div id="mHeader--right--button">
          <img
            src="icn/book-ap.svg"
            alt="Contact icon for mobile header navigation button"
          />
          <p>book an AP</p>
        </div>
      </nav>
    </header>
 
  )
}