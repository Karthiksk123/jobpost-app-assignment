import MultiStepForm, { FormData } from "./MultiStepForm";
import { useState, FormEvent } from "react";
import DeletePage from "./DeletePage";

type JobPostProps = {
  job: FormData;
};

const JobPost = ({ job }: JobPostProps) => {
  const [openModel, setOpenModel] = useState(false);
  const [openDeleteModel, setOpenDeleteModel] = useState(false);

  const editJobPost = (e: FormEvent) => {
    e.preventDefault();
    setOpenModel(true);
  };

  const handleOnClose = () => {
    setOpenModel(false);
    setOpenDeleteModel(false);
  };

  return (
    <div className="flex gap-2 bg-white py-4 px-6 rounded-md ">
      <div className="">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="w-12 h-12 rounded-md"
        />
      </div>
      <div className="flex flex-col w-full -mt-1">
        <div className="flex justify-between ">
          <div>
            <h1 className="text-2xl">{job.jobTitle}</h1>
            <h3 className="text-gray-900">
              {job.companyName} - {job.industry}
            </h3>
            <h2 className="text-gray-500">
              {job.location} ({job.RemoteType})
            </h2>
          </div>
          <div className="flex gap-2 h-8">
            <button
              className="bg-green-500 p-2 rounded-md"
              onClick={editJobPost}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
            <button
              className="bg-red-500 p-2 rounded-md"
              onClick={() => setOpenDeleteModel(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-[24px] space-y-[8px] font-medium text-gray-700">
          <p>Part-Time (9:00 AM - 5.00 PM IST)</p>
          <p>
            Experience ({job.experienceMin} - {job.experienceMax} Years)
          </p>
          <p>
            INR (₹) {job.salaryMin} - {job.salaryMax} / Month
          </p>
          <p>51 - {job.employes} employees</p>
        </div>
        <div className="flex gap-[24px] mt-[24px]">
          {job.applyType === "quickApply" ? (
            <button className="bg-blue-500 hover:bg-blue-700 text-white w-[118px] h-[40px] font-medium py-2 px-4 rounded focus:outline-none focus:shadow-sm">
              Apply Now
            </button>
          ) : (
            <button className=" border border-blue-500 text-blue-500 bg-white hover:bg-blue-500 hover:text-white h-[40px] font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-sm">
              External Apply
            </button>
          )}
        </div>
      </div>
      <MultiStepForm visible={openModel} onClose={handleOnClose} id={job.id} />
      <DeletePage
        visible={openDeleteModel}
        onClose={handleOnClose}
        id={job.id}
      />
    </div>
  );
};

export default JobPost;
