import { useEffect, useState } from "react";
import axios from "axios";
import JobPost from "./JobPost";

const JobFeed = () => {
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    const getJobData = setInterval(() => {
      axios
        .get("https://644d591357f12a1d3ddd8b39.mockapi.io/api/v1/job")
        .then((res) => setJobData(res.data));
    }, 1000);

    return () => clearInterval(getJobData);
  }, []);

  return (
    <div className="flex justify-center w-full h-full bg-gray-200 px-8 xl:px-[60px] py-4">
      <div className="xl:grid xl:grid-cols-2 w-full gap-12 h-full flex flex-col">
        {jobData.length > 0 &&
          jobData.map((job, index) => (
            <div className="" key={index}>
              <JobPost job={job} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobFeed;
