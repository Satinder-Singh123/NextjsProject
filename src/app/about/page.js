import React from "react";

async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}
const About = async () => {
  await takeTime();
  return <div>This is about page</div>;
};

export default About;
