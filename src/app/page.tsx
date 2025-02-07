/* eslint-disable react/react-in-jsx-scope */
import ImageOne from "@/../public/image_one.avif";
import ImageTwo from "@/../public/image_two.avif";
import ImageThree from "@/../public/image_three.avif";
import { AppWindowIcon, ChartNoAxesCombinedIcon, HomeIcon } from "lucide-react";
import { fetchEntries } from "@/lib/contentful";
import LandingCard from "@/components/ui/LandingCard";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import {
  extractHeroFromCards,
  extractLandingCards,
} from "@/lib/utils/contentfulProcessor";

export default async function Home() {
  const landingCards = await fetchEntries("landingCardList");
  const featureCards = await fetchEntries("featureCardList");

  const landingHero = extractHeroFromCards(landingCards[0]);
  const featureHero = extractHeroFromCards(featureCards[0]);
  const landingCard = landingCards[0];

  const cardData = extractLandingCards(landingCard);

  const cards = [
    {
      icon: HomeIcon,
      description:
        "Create your own website to build a relationship with viewers and sell content.",
      image: ImageOne,
    },
    {
      icon: AppWindowIcon,
      description:
        "Sell on-demand content globally and accept payment in over 100 currencies.",
      image: ImageTwo,
    },
    {
      icon: ChartNoAxesCombinedIcon,
      description:
        "Offer incentives like free trials, exclusive content, and promotions to grow your following.",
      image: ImageThree,
    },
  ];

  return (
    <main className="relative">
      <Hero eyebrow={featureHero.eyebrow} title={featureHero.title} />

      {cards.map((card, i) => (
        <Card key={`p_${i}`} i={i} {...card} />
      ))}
      <Hero eyebrow={landingHero.eyebrow} title={landingHero.title} />
      <LandingCard cards={cardData} />
    </main>
  );
}
