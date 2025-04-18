import { HeroSection } from "@/components/layout";
import { SliceMatrix, Geminid, Star } from "@/components/shapes";
import CardsSidebars from "./(cards)/cards-sidebars";


const Sidebars = () => {
  return (
    <>
      <Star />
      <Geminid />
      <SliceMatrix />
      <HeroSection
        title="Sidebars"
        description="Explore a collection of minimal and efficient loader components designed to enhance user experience in any web project. Easily copy and use with just one click."
      />
      <CardsSidebars/>
    </>
  );
};

export default Sidebars;
