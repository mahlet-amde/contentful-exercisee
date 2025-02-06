import React from "react";
import Hero from "@/components/Hero";
import ImageOne from "@/../public/image_one.avif";
import ImageTwo from "@/../public/image_two.avif";
import ImageThree from "@/../public/image_three.avif";
import { AppWindowIcon, ChartNoAxesCombinedIcon, HomeIcon } from "lucide-react";
import Card from "@/components/Card";
import LandingCard from "@/components/ui/LandingCard";

export default async function Home() {
  // const featureCard = await fetchEntries("featureCard");
  // console.log("featureCard items: ", featureCard[0].fields);

  // const icon = featureCard[0]?.fields?.icon?.fields?.file?.url;
  // console.log("icon: ", icon);

  // const description = featureCard[0]?.fields?.description?.content[0]?.content[0]?.value;
  // console.log("Description ", description);

  const featureHero = 
    {
      eyebrow:"Turn viewers into paying subscribers",
      tite: "Video monetization platform",
    }
  

  const landingHero = 
    {
      eyebrow:"Use Cases",
      tite: "How customers use Vimeo"
    }
  

  const cards = [
    {
      icon: HomeIcon,
      description: "Create your own website to build a relationship with viewers and sell content.",
      image: ImageOne,
    },
    {
      icon: AppWindowIcon,
      description: "Sell on-demand content globally and accept payment in over 100 currencies.",
      image: ImageTwo,
    },
    {
      icon: ChartNoAxesCombinedIcon,
      description: "Offer incentives like free trials, exclusive content, and promotions to grow your following.",
      image: ImageThree,
    },
  ];

  return (
    <main className="relative">
      <Hero eyebrow={featureHero.eyebrow} title={featureHero.tite} />
      {cards.map((card, i) => (
        <Card key={`p_${i}`} i={i} {...card} />
      ))}
      <Hero eyebrow={landingHero.eyebrow} title={landingHero.tite}/>
      <LandingCard  />
    </main>
  );
}
