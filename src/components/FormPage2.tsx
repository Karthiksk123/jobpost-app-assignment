import { FormEvent } from "react";
import { FormData } from "./MultiStepForm";
import axios from "axios";

type FormPage2Props = {
  handleChange: (inupt: string) => (e: FormEvent) => void;
  values: FormData;
  onClose: () => void;
  id: number | undefined;
};

const FormPage2 = ({ handleChange, values, onClose, id }: FormPage2Props) => {
  const createJob = (e: FormEvent) => {
    e.preventDefault();
    if (id) {
      axios.put(
        "https://644d591357f12a1d3ddd8b39.mockapi.io/api/v1/job/" + id,
        values
      );
    } else {
      axios.post(
        "https://644d591357f12a1d3ddd8b39.mockapi.io/api/v1/job",
        values
      );
    }
    onClose();
  };
  return (
    <div className="" onClick={(e) => e.stopPropagation()}>
      <form className="pt-[24px]" onSubmit={createJob}>
        <div>
          <label className="label ">Experience</label>
          <div className="flex gap-[24px]">
            <input
              type="number"
              className="input "
              placeholder="Minimum"
              required
              autoFocus
              value={values.experienceMin}
              onChange={handleChange("experienceMin")}
            />
            <input
              type="number"
              className="input "
              placeholder="Maximum"
              required
              value={values.experienceMax}
              onChange={handleChange("experienceMax")}
            />
          </div>
        </div>
        <div className="pt-[24px]">
          <label className="label ">Salery</label>
          <div className="flex gap-[24px]">
            <input
              type="number"
              className="input "
              placeholder="Minimum"
              required
              value={values.salaryMin}
              onChange={handleChange("salaryMin")}
            />
            <input
              type="number"
              className="input "
              placeholder="Maximum"
              required
              value={values.salaryMax}
              onChange={handleChange("salaryMax")}
            />
          </div>
        </div>
        <div className="form-tab pt-[24px] ">
          <label className="label ">Total employee</label>
          <input
            className="input "
            required
            type="number"
            value={values.employes}
            placeholder="ex. 100"
            onChange={handleChange("employes")}
          />
        </div>
        <div>
          <label className="label ">Experience</label>
          <div className="flex gap-[24px] pt-[4px]">
            <div className="flex gap-2">
              <input
                type="radio"
                className="pb-[4px]"
                name="radio-btn-1"
                id="radio-btn-1"
                value="quickApply"
                onChange={handleChange("applyType")}
                checked={values.applyType === "quickApply"}
              />
              <span>Quick apply</span>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                className="pb-[4px]"
                name="radio-btn-1"
                id="radio-btn-1"
                value="externalApply"
                onChange={handleChange("applyType")}
                checked={values.applyType === "externalApply"}
              />
              <span>External apply</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-[56px]">
          <button className="btn ">Save</button>
        </div>
      </form>
    </div>
  );
};

export default FormPage2;
