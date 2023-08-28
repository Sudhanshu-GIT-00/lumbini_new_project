import React from 'react';
import Partners from '../Partners';
import ProjectsImg from "../../Assests/projects.jpg"
import ProjectsImg1 from "../../Assests/Projects1.jpg"

const Projects = () => {
  const projectsData = [
    {
      title: 'Project 1',
      date: 'June 2023',
      details: 'Supported Transforming Rural India Foundation for developing BCC materials on “Health Village” for Panchayati Raj Department, Bihar      ',
    },
    {
      title: 'Project 2',
      date: 'April 2023',
      details: 'Institutional strengthening of Animal Rescue Trust, Pune;  Paroksha Foudnation, Ranchi and etc.',
    },
    {
      title: 'Project 3',
      date: 'April 2023',
      details: 'Supported Quizeal, Escuela Connect and Vitta Edu edtech  in testing of model in the field and customer acquisition.',
    },
    {
      title: 'Project 4',
      date: 'April 2023',
      details: 'Supported Mamta/Welspun Foundation in development of training module, flipbook and mood meter and TOT ',
    },
    {
      title: 'Project 5',
      date: 'April 2023',
      details: 'Impact of Covid-19 on small landholders and landless farmers in Bihar for Heifer International ',
    },
    {
      title: 'Project 6',
      date: 'April 2023',
      details: 'Supported Alliance Organization in designing strategy for implementation of Jal Jeevan Mission Project in Uttrakhand ',
    },
    {
      title: 'Project 7',
      date: 'April 2023', 
      details: 'Developed Sustainable Livelihood through skill development in Lanco Anpara Power Industrial area, Sonbhadra, Uttar Pradesh for Lanco Foundation – A CSR Initiative ',
    },
    {
      title: 'Project 8',
      date: 'April 2023',
      details: 'Technical Assistance to Charity Science Health, a Canadian based Trust to strategize their program in the state of Bihar and supported in getting approval from state health ministry and field implementation. '
    },
    {
      title: 'Project 9',
      date: 'April 2023',
      details: 'Human Resource Solutions to various partners like Vansh Infertility Center, Damodar Solutions, Sri Sai Lions Netralaya, Pronto International and etc. '
    },
    {
      title: 'Project 10',
      date: 'April 2023',
      details: 'State agency for mobilizing clients for opening of Accounts in YES, Kotak Mahindra and Axis Bank.      ',
    },
    {
      title: 'Project 11',
      date: 'April 2023',
      details: 'Environmental Attitude Survey to assess awareness of Toilet use and maintain cleaning in districts of Bihar',
    },
    {
      title: 'Project 12',
      date: 'April 2023',
      details: 'Provided support to SABLA Ngo to develop a concept paper for “Assessing better livelihood options and effectiveness of livelihood practices among women of Self-help group in Raebareli district of Uttar Pradesh state of India'
    },
    {
      title: 'Project 13',
      date: 'April 2023',
      details: 'Assessment of current on-going health projects in the organization and devise immediate and long-term strategies for expansion. – Jeevan Bikas Samaj, Birat Nagar, Morang, Nepal      ',
    },
    {
      title: 'Project 14',
      date: 'April 2023',
      details: 'Developed proposal for supporting operationalization of 25 NAND DHARS (Anganwadi centers) in Barmer district of Rajasthan. – Dhara Sansthan'
    },
    {
      title: 'Project 15',
      date: 'April 2023',
      details: 'Provide assistance to Samarpan Society for Health Research and Development to devise strategies for improving vaccination reminder in the assigned geographical area.'
    }
    // Add more project objects as needed
  ];

  return (
    <>
    <div className=" py-5">
      <div className="container mx-auto ">
        <div className='flex flex-col items-center'>
        {/* <img src={ProjectsImg} alt="" className="w-full h-1/2 mb-4 rounded-lg" /> */}
        <img src={ProjectsImg1} alt="" className="w-full h-1/2 mb-4 rounded-lg" />
        {/* <img src={ProjectsImg} alt="" className="w-3/5 h-1/2 mb-4 rounded-lg" /> */}
        </div>
        <h1 className="text-4xl font-bold mb-10">Projects</h1>
        {/* <p className="text-lg mb-10">Empowering Organizations Through Customized Project Solutions</p> */}
        {projectsData.map((project, index) => (
          <div key={index} className="flex mb-6">
            <div className="w-1/4">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-gray-500">{project.date}</p>
            </div>
            <div className="w-3/4 text-left">
              <p>{project.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Partners/>
    </>
  );
};

export default Projects;
