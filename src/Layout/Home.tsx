import React from "react";
import Drawer from "../Components/Home/DrawerComponents/Drawer";
import HeroSection from "../Components/Home/HeroSection";
import {
  DrawerWrapper,
  HeroSectionWrapper,
  HomeWrapper,
} from "../Components/Home/StyledHome";
import { HomeProvider } from "../Context/HomeContext";
import { DrawerProvider } from "../Context/DrawerContext";

const Home = () => {
  return (
    <HomeWrapper>
      <DrawerProvider>
        <DrawerWrapper>
          <Drawer />
        </DrawerWrapper>
        <HeroSectionWrapper>
          <HomeProvider>
            <HeroSection />
          </HomeProvider>
        </HeroSectionWrapper>
      </DrawerProvider>
    </HomeWrapper>
  );
};

export default Home;
