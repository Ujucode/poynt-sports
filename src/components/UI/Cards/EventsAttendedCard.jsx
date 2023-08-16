import eventCardImage from "../../../assets/eventcardimage.jpg" 
const EventsAttendedCard = ({ name }) => {
    return (
      <div className="overflow-hidden">
        <div className="group relative block bg-black ">
          <img
            alt="Events"
            src={eventCardImage}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 "
          />
           <div className="absolute top-0 left-0 text-gray-800  p-2 text-md">
          Date or Time
        </div>
          <div className="relative text-left border-x p-4 sm:p-6 lg:p-8 ">
            <div className="mt-32 sm:mt-48 lg:mt-64 ">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-white">
              <p className="text-sm text-white-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates
                doloremque reiciendis nostrum harum. Repudiandae?
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className="p-1">
          
  
          <p className="text-xl text-left font-bold text-white-0 sm:text-2xl">
            {name}
          </p>
        </div>
      </div>
    );
  };
  
  export default EventsAttendedCard;
  