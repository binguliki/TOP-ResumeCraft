import Details from "./Details";
import Resume from "./Resume";
import { useState } from "react";

const tempPersonalData = {
  fullName: 'Jake Thompson',
  email: 'jake.thompson@email.com',
  phoneNumber: '(555) 123-4567',
  address: 'San Francisco, CA'
}
const tempEducation = {
  school: 'University of California',
  degree: 'Bachelor of Science in Computer Science',
  startYear: 2017,
  endYear: 2021,
  location: 'Berkeley'
}
const tempExperience = {
  companyName: 'TechCorp Solutions',
  position: 'Senior Software Engineer',
  startYear: 2017,
  endYear: 2021,
  location: 'India',
  points: [
    "Led development of microservices architecture serving 2M+ users",
    "Reduced system latency by 45% through optimization strategies",
    "Mentored 5 junior developers and established code review practices"
  ]
}
export default function Main() {
  const composedData = {
    'personalDetails': tempPersonalData,
    'education': tempEducation,
    'experience': tempExperience
  }
  const [data, setData] = useState(composedData);

  const handleData = (data, type) => {
    setData((prev) => {
      return {
        ...prev,
        [type]: data
      }
    })
  }

  return (
    <div className="h-full bg-background p-4 grid grid-cols-1 md:grid-cols-5 md:grid-rows-1 gap-4 not-md:overflow-y-scroll">
      <div className="col-span-1 md:col-span-2 flex justify-center py-4">
        <Details
          data={data}
          handleData={handleData}
        />
      </div>
      <div className="col-span-1 md:col-span-3 flex justify-center py-4">
        <Resume
          data={data}
        />
      </div>
    </div>
  );
}
