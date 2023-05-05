import { useState } from "react";
import MultiStepForm from "./MultiStepForm";

const Nav = () => {
  const [showModel, setShowModel] = useState(false);

  const handleOnClose = () => {
    setShowModel(false);
  };
  return (
    <div className="w-full h-16 p-4 px-8 flex xl:justify-between justify-center text-white text-xl bg-slate-100 sticky top-0 z-30 ">
      <div className="flex gap-7">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-normal  px-4 rounded text-center focus:outline-none focus:shadow-sm"
          onClick={() => setShowModel(!showModel)}
        >
          Create a Job
        </button>
      </div>
      <MultiStepForm
        visible={showModel}
        onClose={handleOnClose}
        id={undefined}
      />
    </div>
  );
};

export default Nav;
