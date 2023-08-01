const Card = ({ title, description, image }) => {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-lg overflow-hidden shadow-md mb-4 flex flex-col">
        <div className="flex-shrink-0">
          <img src={image} alt="Card" className="w-full h-72 object-cover object-center" />
        </div>
        <div className="p-4 flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
 
  
  
  
  
  
  