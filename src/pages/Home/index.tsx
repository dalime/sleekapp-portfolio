import React from "react";

import SleekAppLogo from "../../assets/images/sleekapp-logo.png";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <img
        src={SleekAppLogo}
        alt="Sleek App"
        width={200}
        style={{ width: 200, height: "auto" }}
      />
    </div>
  );
}

export default Home;
