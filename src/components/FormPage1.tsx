import { FormData } from "./MultiStepForm";
import { FormEvent } from "react";

type FormPage1Props = {
  nextStep: () => void;
  handleChange: (inupt: string) => (e: FormEvent) => void;
  values: FormData;
};

const FormPage1 = ({ nextStep, handleChange, values }: FormPage1Props) => {
  const next = (e: FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="" onClick={(e) => e.stopPropagation()}>
      <form className="pt-[24px]" onSubmit={next}>
        <div className="form-tab ">
          <label className="label ">
            Job Title<span className="text-[#ff0000]">*</span>
          </label>
          <input
            className="input "
            required
            autoFocus
            type="text"
            value={values.jobTitle}
            placeholder="ex. UX UI Designer"
            onChange={handleChange("jobTitle")}
          />
        </div>
        <div className="form-tab ">
          <label className="label ">
            Company Name<span className="text-[#ff0000]">*</span>
          </label>
          <input
            className="input "
            required
            type="text"
            value={values.companyName}
            placeholder="ex. Google"
            onChange={handleChange("companyName")}
          />
        </div>
        <div className="form-tab ">
          <label className="label ">
            Industry<span className="text-[#ff0000]">*</span>
          </label>
          <input
            className="input "
            required
            type="text"
            value={values.industry}
            placeholder="ex. Information Technology"
            onChange={handleChange("industry")}
          />
        </div>
        <div className="flex gap-[24px]">
          <div className="form-tab ">
            <label className="label ">Location</label>
            <input
              className="input "
              required
              type="text"
              value={values.location}
              placeholder="ex. Chennai"
              onChange={handleChange("location")}
            />
          </div>
          <div className="form-tab ">
            <label className="label ">Remote Type</label>
            <input
              className="input "
              required
              type="text"
              value={values.RemoteType}
              placeholder="ex. In-Office"
              onChange={handleChange("RemoteType")}
            />
          </div>
        </div>
        <div className="flex justify-end mt-[30px]">
          <button className="btn ">Next</button>
        </div>
      </form>
    </div>
  );
};

export default FormPage1;
