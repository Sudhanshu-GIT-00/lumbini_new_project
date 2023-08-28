import React from 'react';

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: 'Job 1',
      subtitle: 'Job Subtitle 1',
      info: 'Job Info 1',
      note: 'If Interested mail: lumbiniconsultancyservices@gmail.com',
      image: 'image1.jpg',
    },
    {
      id: 2,
      title: 'Job 2',
      subtitle: 'Job Subtitle 2',
      info: 'Job Info 2',
      note: 'If Interested mail: lumbiniconsultancyservices@gmail.com',
      image: 'image2.jpg',
    },
    {
      id: 3,
      title: 'Job 3',
      subtitle: 'Job Subtitle 2',
      info: 'Job Info 2',
      note: 'If Interested mail: lumbiniconsultancyservices@gmail.com',
      image: 'image2.jpg',
    },
    {
      id: 4,
      title: 'Job 4',
      subtitle: 'Job Subtitle 2',
      info: 'Job Info 2',
      note: 'If Interested mail: lumbiniconsultancyservices@gmail.com',
      image: 'image2.jpg',
    },
    {
      id: 5,
      title: 'Job 5',
      subtitle: 'Job Subtitle 2',
      info: 'Job Info 2',
      note: 'If Interested mail: lumbiniconsultancyservices@gmail.com',
      image: 'image2.jpg',
    },
    // Add more job objects here
  ];

  return (
    <div className="p-5">
      <h1 className="text-center text-3xl font-bold mb-2">Jobs</h1>
      <h2 className="text-center  text-gray-600 mb-8">Posts Currently Open</h2>

      <div className="flex flex-col items-center text-left">
        {jobs.map(job => (
          <div key={job.id} className="flex items-center p-5 my-8 bg-white rounded-lg shadow-lg">
            <img src={job.image} alt="Job" className="w-24 h-24 rounded-full mr-5" />
            <div>
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <h4 className="text-md text-gray-500 mb-2">{job.subtitle}</h4>
              <p className="mb-2">{job.info}</p>
              <p className="text-gray-500">{job.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
