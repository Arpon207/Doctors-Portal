import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen flex flex-row justify-center items-center">
      <SyncLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
