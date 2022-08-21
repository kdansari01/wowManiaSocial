import "./auth.scss";
import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

export const Auth = ({ children }) => {
  const container = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../AnimationData/107385-login.json"),
      });
    } else {
      setIsLoaded(true);
    }
  }, [isLoaded]);
  return (
    <section className="loginPage overflow-hidden">
      <main className="loginPageWrapper row overflow-hidden">
        <aside className="login_Page_Left col-lg-7">
          <div className="loginPageAnimation" ref={container} />
        </aside>
        <div className=" col-lg-5 col-12 align-items-center d-flex">{children}</div>
      </main>
    </section>
  );
};

export default Auth;
