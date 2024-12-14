import React from "react";
import HeaderLayout from "./Components/Header/HeaderLayout";
import SocialLinks from "./Components/SocialMediaLinks/SocialLinks";
import Divider from "./Components/Header/Divider";
import Features from "./Components/Features/Features";
import Testimonial from "./Components/Testimonial/Testimonial";
import AdditionalFeatures from "./Components/Features/AdditionalFeatures";
import FAQ from "./Components/FAQSection/FAQ";
import HelpSection from "./Components/HelpAndFreeTrail/HelpSection";
import FreeTrailSection from "./Components/HelpAndFreeTrail/FreeTrailSection";
import Footer from "./Components/Footer/Footer";
import AdditionalLinks from "./Components/AdditionalLinks/AdditionalLinks";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <div>
      <HeaderLayout />
      <Divider />
      <SocialLinks />
      <Divider />
      <Features />
      <Testimonial />
      <AdditionalFeatures />
      <Divider />
      <FAQ />
      <HelpSection />
      <Divider />
      <Blogs />
      <FreeTrailSection />
      <AdditionalLinks />
      <Divider />
      <Footer />
    </div>
  );
}

export default App;
