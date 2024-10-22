import { Navbar, Hero } from "../../components/index";

const LandingPage = () => {
  return (
    <>
      <section className="   ">
        <Navbar />
        <div className=" pt-[5rem] md:pt-[10rem] ">
          <Hero />
        </div>
      </section>
    </>
  );
};
export default LandingPage;
