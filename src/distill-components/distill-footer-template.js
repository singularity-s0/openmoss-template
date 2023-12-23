import logo from "../assets/logo.svg";

export const footerTemplate = `
<style>

:host {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 300;
  padding: 2rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: hsl(180, 5%, 100%); /*hsl(200, 60%, 15%);*/
  text-align: left;
  contain: content;
}

.footer-container .logo svg {
  width: auto;
  height: 20px;
  position: relative;
  top: 4px;
  margin-right: 2px;
}

.footer-container .logo {
  font-size: 17px;
  font-weight: 200;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  margin-right: 6px;
}

.footer-container {
  grid-column: text;
}

.footer-container .nav {
  font-size: 0.9em;
  margin-top: 1.5em;
}

.footer-container .nav a {
  color: rgba(0, 0, 0, 0.8);
  margin-right: 6px;
  text-decoration: none;
}

</style>

<div class='footer-container'>

  <a href="/" class="logo">
    ${logo}  MOSS
  </a> is dedicated to clear explanations of machine learning

  <div class="nav">
    <a href="/">Home</a>
    <a href="/about/">About</a>
  </div>

</div>

`;
