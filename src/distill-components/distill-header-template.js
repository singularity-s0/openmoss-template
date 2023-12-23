import logo from "../assets/logo.svg";

export const headerTemplate = `
<style>
distill-header {
  position: relative;
  height: 60px;
  background-color: hsl(180, 5%, 100%);
  width: 100%;
  box-sizing: border-box;
  z-index: 2;
  color: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
}
distill-header .content {
  height: 70px;
  grid-column: page;
}
distill-header a {
  font-size: 16px;
  height: 60px;
  line-height: 60px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
  padding: 22px 0;
}
distill-header a:hover {
  color: rgba(0, 0, 0, 1);
}
distill-header svg {
  width: 70px;
  position: relative;
  top: 0px;
  margin-right: 2px;
}
@media(min-width: 1080px) {
  distill-header {
    height: 70px;
  }
  distill-header a {
    height: 70px;
    line-height: 70px;
    padding: 28px 0;
  }
  distill-header .logo {
  }
}
distill-header .logo {
  font-size: 17px;
  font-weight: 200;
}
distill-header .nav {
  float: right;
  font-weight: 300;
}
distill-header .nav a {
  font-size: 12px;
  margin-left: 24px;
  text-transform: uppercase;
}
</style>
<div class="content">
  <a href="/" class="logo">
    ${logo}
  </a>
  <nav class="nav">
    <a href="/about/">About</a>
  </nav>
</div>
`;
