import Input from "../UI/Input";

const LeaveAReply = () => {
  return (
    <>
      <div className="text-lg font-bold">Leave a Reply</div>
      <div className="py-4 text-zinc-500">
        Your email address will not be published. Required fields are marked *
      </div>
      <textarea
        name="message"
        rows="10"
        cols="110"
        placeholder="Comments*"
      ></textarea>
      <br />
      <input type="text" placeholder="Name*" className="my-4" /> <br />
      <input type="email" placeholder="Email*" className="my-4" /> <br />
      <input type="text" placeholder="Website*" className="my-4" /> <br />
      <input type="checkbox" value="Bike">
        Save my name,email and Website in this browser for the next time I
        comment
      </input>
    </>
  );
};

export default LeaveAReply;
