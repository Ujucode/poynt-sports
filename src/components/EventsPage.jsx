import Navbar from "./UI/Navbar";
import Card from "./UI/Card";

const EventsPage = () => {
  // Sample data for cards
  const cardData = [
    {
      title: 'Card 1',
      description: 'This is the first card',
      image: 'src/assets/event1.jpeg',
    },
    {
      title: 'Card 2',
      description: 'This is the second card',
      image: 'src/assets/event1.jpeg',
    },
    {
      title: 'Card 3',
      description: 'This is the third card',
      image: 'src/assets/event1.jpeg',
    },
    // Add more cards as needed
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-white to-white">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="container mx-auto grid grid-cols-1 gap-16">
          {Array.from(Array(10)).map((_, index) => (
            <Card
              key={index}
              title={cardData[index % cardData.length].title}
              description={cardData[index % cardData.length].description}
              image={cardData[index % cardData.length].image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;






