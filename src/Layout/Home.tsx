import React from "react";
import Drawer from "../Components/Home/DrawerComponents/Drawer";
import HeroSection from "../Components/Home/HeroSection";
import {
  DrawerWrapper,
  HeroSectionWrapper,
  HomeWrapper,
} from "../Components/Home/StyledHome";

const Home = () => {
  return (
    <HomeWrapper>
      <DrawerWrapper>
        <Drawer />
      </DrawerWrapper>
      <HeroSectionWrapper>
        <HeroSection />
      </HeroSectionWrapper>
    </HomeWrapper>
  );
};

export default Home;
