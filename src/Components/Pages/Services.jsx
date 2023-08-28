import React from "react";
import ServicesImg from "../../Assests/services.jpg"
import longImg from "../../Assests/services.jpg"
import banner from "../../Assests/service1.jpg"

const Services=()=>{
  return(
    <div className=" py-0 px-0">
      <div className="container mx-auto flex flex-col items-center ">
      <img src={longImg} style={{padding:0}} alt="" className="w-full h-1/2 mb-8 rounded-lg" />

        <h2 className="text-3xl text-center font-bold mb-2">Services</h2>
        <p className="text-center text-gray-600 mb-8">Unlocking Your Potential Through Expert Consulting Services</p>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3  mb-8">
            <div className=" bg-blue-950 text-white p-6 rounded-lg">
              {/* <img src={''} alt="img"/> */}
              <h3 className="text-lg font-bold mb-2">NGO CONSULTANCY</h3>
              <p className="text-gray-400">NGO Consultancy is key area where our organization is providing One Stop Solution to various NGOs across India. We are into business development, proposal writing, documentation, digital support and etc. We work with NGOs for overall institutional strengthening for generating resources and effective implementation of interventions. </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className=" bg-blue-950 text-white p-6 rounded-lg">
              {/* <img src={''} alt="img"/> */}
              <h3 className="text-lg font-bold mb-2">HUMAN RESOURCE (HR) SOLUTION</h3>
              <p className="text-gray-400">Human Resource (HR) Solution is being provided to our partners as per requirement. We have track record of providing quality and stable staff with due diligence. </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className=" bg-blue-950 text-white p-6 rounded-lg">
              {/* <img src={''} alt="img"/> */}
              <h3 className="text-lg font-bold mb-2">RESEARCH/STUDIES</h3>
              <p className="text-gray-400">Research/Studies team of the organization has rich experience in supporting partners in questionnaire designing, data collection (qualitative and quantitative) & its analysis and final quality report preparation. </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className=" bg-blue-950 text-white p-6 rounded-lg">
              {/* <img src={''} alt="img"/> */}
              <h3 className="text-lg font-bold mb-2">TECHNICAL ASSISTANCE</h3>
              <p className="text-gray-400">Technical Assistance to private and public sector in planning, execution, MIS development, monitoring & assessment of national programs/Schemes at the ground level. </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className=" bg-blue-950 text-white p-6 rounded-lg">
              {/* <img src={''} alt="img"/> */}
              <h3 className="text-lg font-bold mb-2">SUPPLY –CHAIN MANAGEMENT</h3>
              <p className="text-gray-400">Supply –Chain Management solution provided to clients in the most streamlined and cost-effective way possible. It maximizes customer value and gain a competitive advantage in the marketplace. </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className=" bg-blue-950 text-white p-6 rounded-lg">
              {/* <img src={''} alt="img"/> */}
              <h3 className="text-lg font-bold mb-2">CORPORATE SOCIAL RESPONSIBILITY (CSR)</h3>
              <p className="text-gray-400">Corporate Social Responsibility (CSR) aims to provide our expertise in project formulation, implementation and assessment to support CSR initiatives of corporate sectors. </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className=" bg-blue-950 text-white p-6 rounded-lg">
              {/* <img src={''} alt="img"/> */}
              <h3 className="text-lg font-bold mb-2">SOCIAL AND BEHAVIOUR CHANGE COMMUNICATION (SBCC)</h3>
              <p className="text-gray-400">Social and Behaviour Change Communication (SBCC) is channel to develop positive behaviour change and we work with partners to formulate their SBCC strategies/plan and develop various innovative & cost-effective IEC materials. </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className=" bg-blue-950 text-white p-6 rounded-lg">
              {/* <img src={''} alt="img"/> */}
              <h3 className="text-lg font-bold mb-2">DOCUMENTATION & TRANSLATION SUPPORT</h3>
              <p className="text-gray-400">We provide Annual Report, Case Studies, Process Documentation, Detail Progress Report (DPR), Translation services, Proof Reading, Profile & other documentation support.  </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className=" bg-blue-950 text-white p-6 rounded-lg">
              {/* <img src={''} alt="img"/> */}
              <h3 className="text-lg font-bold mb-2">FINANCIAL AND STATUTORY COMPLIANCE SOLUTION</h3>
              <p className="text-gray-400">Audit Report, IT Return, Insurance, CSR-1 Certificate,  NGO Darpan Registration, Firm, Partnership and Company Registration, Society, Trust, Sec-8 NGO, MSME Registration, 12 A and 80G and FCRA Registration. </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className=" bg-blue-950 text-white p-6 rounded-lg">
              {/* <img src={''} alt="img"/> */}
              <h3 className="text-lg font-bold mb-2">EDUCATION AND TRAINING SUPPORT</h3>
              <p className="text-gray-400">We render support to the NGOs and Companies in designing training, development of training module, pre-testing of module, printing and training of team.  We support in delivering community education program for bringing behaviour change or imparting requisite skills for employment.  </p>
            </div>
          </div>
          {/* <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className=" bg-blue-950 text-white p-6 rounded-lg">

              <h3 className="text-lg font-bold mb-2">HOSPITAL & HEALTH PLANNING AND QUALITY CERTIFICATION</h3>
              <p className="text-gray-400">Hospital & Health Planning and Quality Certification professionals of Lumbini has decades of experience to provide management solution to cope with changing healthcare environment. We are into NABH, ISO and other Quality Management System certification services. </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className=" bg-blue-950 text-white p-6 rounded-lg">

              <h3 className="text-lg font-bold mb-2">HEALTH INSURANCE</h3>
              <p className="text-gray-400"> Health Insurance Advisory services are provided by our organization and offer solution of various related plans and policies of renowned insurance service provider.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-10 mb-8">
            <div className=" bg-blue-950 text-white p-6 rounded-lg">

              <h3 className="text-lg font-bold mb-2">CHILD CAREER COUNSELLING</h3>
              <p className="text-gray-400">Child Career Counselling using Dermatoglyphics Multiple Intelligence Test help parents to plan their children’s career and understand their strengths, personality, learning style and etc. </p>
            </div>
          </div> */}
          
        </div>
      </div>
    </div>
  );
};
export default Services;