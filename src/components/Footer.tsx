import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 728) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {showFooter && (
        <footer className="footer">
          <p>We are here to help you navigate UChicago mental health resources. We know this can be hard. We just hope to make it a bit easier.  </p>
        </footer>
      )}
    </>
  );
};

export default Footer;
