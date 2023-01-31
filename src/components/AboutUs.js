import StaticCard from "./StaticCard";
import Icon from '../images/pexels-eric-esma-894156.jpg';
import Icon2 from '../images/pexels-ekrulila-4491532.jpg';
import Icon3 from '../images/pexels-rodnae-productions-8231185.jpg';

const AboutUs = () => {
  return (
    <section className="about-us">
      <h1 className="about-us--title">Our Story</h1>
      <StaticCard 
        title="We care about great musicians."
        content="We started as a garage band!
        We're all from Rock Sandwich, TX."
        img={Icon}
      />
      <StaticCard 
      title="We live in a bus out back."
      content="We built a hookah lounge on the roof!
      We're all fans of the Rock Sandwich Cassowaries."
      img={Icon3}
      reverse={true}
      />
      <StaticCard 
      title="We only eat avocados."
      content="There's a pinball machine in the shower!
      The Rock Sandwich Times called us their #9
      music shop in town. Yes! Top ten, baby!"
      img={Icon2}
      />
    </section>
  )
}

export default AboutUs;