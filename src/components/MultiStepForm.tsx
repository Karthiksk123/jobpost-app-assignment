import { useState, FormEvent, useEffect } from "react";
import FormPage1 from "./FormPage1";
import FormPage2 from "./FormPage2";
import axios from "axios";

export type FormData = {
  jobTitle: string;
  companyName: string;
  industry: string;
  location: string;
  RemoteType: string;
  experienceMin: number | undefined;
  experienceMax: number | undefined;
  salaryMin: number | undefined;
  salaryMax: number | undefined;
  employes: number | undefined;
  applyType: string;
};

const InitialData: FormData = {
  jobTitle: "",
  companyName: "",
  industry: "",
  location: "",
  RemoteType: "",
  experienceMin: undefined,
  experienceMax: undefined,
  salaryMin: undefined,
  salaryMax: undefined,
  employes: undefined,
  applyType: "",
};

export interface MultiStepFormProps {
  visible: boolean;
  onClose: () => void;
  id: number | undefined;
}

const MultiStepForm = ({ visible, onClose, id }: MultiStepFormProps) => {
  if (!visible) return null;
  const [step, setStep] = useState(1);
  const [data, setData] = useState(InitialData);
  const values = data;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios
      .get("https://644d591357f12a1d3ddd8b39.mockapi.io/api/v1/job/" + id)
      .then((res) => setData(res.data));
  }, [id]);

  const nextStep = () => setStep(step + 1);

  const handleChange = (input: string) => (e: FormEvent) => {
    setData({ ...data, [input]: e.target.value });
  };

  const switchStep = () => {
    switch (step) {
      case 1:
        return (
          <FormPage1
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPage2
            handleChange={handleChange}
            values={values}
            onClose={onClose}
            id={id}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      id="form-container"
      onClick={onClose}
      className="fixed inset-0 bg-opacity-10 backdrop-blur-sm flex justify-center items-center"
    >
      <div
        className="bg-white text-black w-[577px] h-[564px] rounded-md p-[32px] border-gray-300 border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between font-semibold">
          <h1>Create a job</h1>
          <h1>Step {step}</h1>
        </div>
        <div
          className=" text-black p-2 rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          {switchStep()}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
