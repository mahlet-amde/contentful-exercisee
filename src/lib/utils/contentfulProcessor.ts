type cardItem = {
    title: string;
    description: string;
    url: string;
    videoUrl: string;
}

export function extractLandingCards(section: any){
    const landingCard : cardItem[] = [];
    const cardSection = section.fields.cards;
    cardSection.map((card: any) =>{
        const imageUrl =   card.fields.landingCardImage.fields.file.url;
        landingCard.push({
            title : card.fields.title,
            description : card.fields.description.content[0].content[0].value,
            url :  imageUrl,
            videoUrl : "https://www.youtube.com/embed/tpiyEe_CqB4",
        });
      })

      return landingCard;
}

export function extractHeroFromCards(section: any){
    const hero = section?.fields?.hero?.fields;
    return hero;
}