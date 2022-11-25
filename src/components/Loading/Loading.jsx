import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="absolute h-screen w-screen flex flex-row justify-center items-center">
      <SyncLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
