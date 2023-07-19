const AtheleteCard = () => {
  return (
    <div className="">
      <a href="/some/valid/link" className="group relative block bg-black ">
        <img
          alt="Athlete"
          src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80"
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 "
        />

        <div className="relative text-left border-x p-4 sm:p-6 lg:p-8 ">
          <div className="mt-32 sm:mt-48 lg:mt-64 ">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates
                doloremque reiciendis nostrum harum. Repudiandae?
              </p>
            </div>
          </div>
        </div>
      </a>
      <div className="p-1">
        <p className="text-sm text-left font-medium uppercase tracking-widest text-pink-600">
          Football
        </p>

        <p className="text-xl text-left font-bold text-white-0 sm:text-2xl">
          Tony Wayne
        </p>
      </div>
    </div>
  );
};

export default AtheleteCard;
