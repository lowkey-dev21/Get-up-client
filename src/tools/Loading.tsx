import LoaderBtn from "./LoaderBtn";

const Loading = () => {
  return (
    <>
      <section className=" fixed w-full z-[100] flex items-center h-full justify-center bg-[#25AD35] ">
        <LoaderBtn size="80" />
      </section>
    </>
  );
};
export default Loading;
