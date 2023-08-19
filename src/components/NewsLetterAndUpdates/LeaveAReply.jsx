import Button from "../UI/Button";
const LeaveAReply = () => {
  return (
    <section className="mb-24">
      <form>
        <div className="text-lg font-bold">Leave a Reply</div>
        <div className="py-4 text-zinc-500">
          Your email address will not be published. Required fields are marked *
        </div>
        <textarea
          name="message"
          rows="10"
          cols="72"
          placeholder="Comments*"
          className="pl-2 border-2"
        ></textarea>
        <br />
        <input
          type="text"
          placeholder="Name*"
          className="w-full pl-2 my-1 border-2"
        />{" "}
        <br />
        <input
          type="email"
          placeholder="Email*"
          className="w-full pl-2 my-1 border-2"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Website*"
          className="w-full pl-2 my-1 border-2"
        />{" "}
        <br />
        <div className="mt-2 flex gap-2">
          <input className="w-4 h-4 " type="checkbox" value="Save my name" />
          <p className="">
            Save my name, email and website in this browser for the next time I
            comment.
          </p>
        </div>
        <Button className="mt-2">Submit</Button>
      </form>
    </section>
  );
};

export default LeaveAReply;
