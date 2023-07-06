import BgHome from "../assets/bgHome.jpg";

export default function Page404() {
  return (
    <div className=" items-center text-white flex min-h-screen">
      <div className="items-center w-full flex flex-col">
        <img
          alt="Under development"
          src={BgHome}
          className="inline-block max-w-full w-[60vw] mx-auto"
        />
        <h3 className="mb-3">404: The page you are looking for isn’t here</h3>
        <p>
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation
        </p>
        <button type="button" href="/">
          Go back to dashboard
        </button>
      </div>
    </div>
  );
}
