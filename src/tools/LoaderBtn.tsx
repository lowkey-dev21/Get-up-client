import { cardio } from "ldrs";
cardio.register();
interface LoaderBtnProps {
  size: string; // Define size as a number, or adjust as needed
}

const LoaderBtn = ({ size }: LoaderBtnProps) => {
  return (
    // Default values shown
    <l-cardio size={size} stroke="4" speed="2" color="black"></l-cardio>
  );
};
export default LoaderBtn;
