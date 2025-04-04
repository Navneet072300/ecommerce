// @ts-ignore
import heroImg from "../../assets/rabbit-hero.webp";

const Hero = () => {
  return (
    <section>
      <img
        src={heroImg}
        alt="Rabbit"
        className="w-full  md:h-[600px] lg:h-[750px] object-cover"
      />
    </section>
  );
};

export default Hero;
