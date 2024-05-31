import React from "react";

const Home: React.FC = () => {
  return (
    <video autoPlay loop style={{ width: "100%", height: "200px" }}>
      <source src="/images/mmk.mp4" />
    </video>
  );
};

export default Home;
