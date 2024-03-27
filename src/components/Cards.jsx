import React from "react";
import react from "../assets/react.png";
import data from "../assets/data.png";
import java from "../assets/java.png";
import rpa from "../assets/rpa.png";
import agile from "../assets/agile.png";
import devops from "../assets/3d.png";

let javacontent =
  "Developed and deployed an Automation Platform as a Service (APaaS) solution using Java Spring Boot, resulting in annual savings exceeding $1.8 million.\n\nLed end-to-end implementation, testing, and setup of the platform, adhering to best practices and deploying it on Azure Cloud Services.\n\nCollaborated cross-functionally to gather requirements, develop, test, and deploy multiple automation services using Java Spring Boot.\n\nEstablished a new implementation, leading to approximately $5 million in revenue and improved customer communication channels.\n\nEnhanced existing solutions, resulting in an estimated saving of $788K by reducing Average Handling Time (AHT), customer callbacks, and service latency.\n\nImplemented Power BI Dashboards for proactive monitoring of technical metrics, contributing to issue resolution before customer impact.\n\nUtilized Generative AI and Large Language Models to streamline Business As Usual (BAU) processes, earning recognition during leadership visits.\n\nCollaborated with development and product teams to implement and deploy services at scale, following Agile best practices as a Certified SAFe 5 Architect.\n\nUtilized Java Spring Boot for developing and deploying various automations within the telecom industry using tools like Power Automate and Staviso automation platform.\n\nParticipated in and won prizes across multiple Hackathons conducted in AT&T, showcasing Java Spring Boot expertise.\n\nStreamlined technical workflows through automation, ensuring seamless integration of new technologies and conducting system analysis for performance enhancements.\n\nMentored junior technicians, fostering a culture of continuous learning and professional growth in Java Spring Boot development and automation practices.";
let datacontent =
  "Proactively set up Power BI Dashboards to monitor technical metrics of deployed services, enabling real-time tracking and proactive issue resolution.\nLeveraged Power BI for comprehensive data visualization, facilitating in-depth analysis of technical metrics and service performance.\nCreated repositories to showcase innovative tools and accelerators during client visits, providing visual clarity on automation accelerators and facilitating data-driven discussions.Conducted thorough system analysis, utilizing data visualization techniques to identify opportunities for performance enhancements and cost savings.\nUtilized Power BI to streamline technical workflows, enhancing productivity through actionable insights derived from data analysis.\nTrained junior technicians on Power BI and data visualization best practices, fostering a culture of data-driven decision-making and continuous improvement.";
let architectcontent =
  "Led end-to-end implementation, testing, and setup of an Automation Platform as a Service (APaaS) solution, resulting in significant annual savings and revenue generation.\nDeveloped custom software solutions to address unique business requirements, driving overall operational improvements.\nImplemented a new channel of communication with end customers, resulting in substantial revenue growth.\nCollaborated cross-functionally to gather requirements, develop, test, and deploy multiple automation services, showcasing expertise in technical architecture.\nUtilized Java Spring Boot for the development of scalable and robust applications, ensuring seamless deployment on Azure Cloud Services.\nRecognized for setting up new implementations within tight timelines, resulting in substantial revenue gains and operational efficiencies.\nDemonstrated proficiency in Agile best practices as a Certified SAFe 5 Architect, ensuring effective implementation and deployment of services at scale.\nParticipated in and won prizes across multiple Hackathons, showcasing technical architecture skills in developing innovative solutions.\nStreamlined technical workflows through automation, ensuring seamless integration of new technologies and conducting thorough system analysis for performance enhancements.\nMentored junior technicians, fostering a culture of continuous learning and professional growth in technical architecture and large-scale service deployment.";
let rpacontent =
  "Automated over 40 processes during tenure as a Consultant at Deloitte Consulting, resulting in significant annual savings of over 35,000+ hours for clients.\nDeveloped and deployed automation solutions using Automation Anywhere v11+, showcasing expertise in robotic process automation.\nImplemented RPA solutions to streamline maintenance tasks, reducing manual effort and enhancing operational efficiency.\nUtilized VBA macros for data manipulation and process automation, demonstrating versatility in automation tools and techniques.\nCollaborated on firm initiatives to identify and correct pain points for clients through data analysis, leveraging RPA for process optimization.\nDemonstrated expertise in RPA by participating in and winning prizes across multiple Hackathons, showcasing innovative solutions and technical proficiency.Streamlined technical workflows for enhanced productivity through the implementation of automation tools, ensuring seamless integration of RPA into existing systems.\nMentored junior technicians on industry best practices and automation procedures, fostering a culture of continuous learning and professional growth in RPA and automation technologies.";
let agilecontent =
  "Demonstrated proficiency in Agile/SAFe practices as a Certified SAFe 5 Architect, ensuring effective implementation and deployment of services at scale.\nCollaborated with development and product teams to effectively implement and deploy services following Agile best practices, fostering a culture of continuous improvement.\nParticipated in Hackathons and firm initiatives, showcasing agility and adaptability in developing innovative solutions under tight timelines.\nConducted thorough system analysis and identified opportunities for performance enhancements and cost savings, aligning with Agile principles of continuous improvement and customer value delivery.\nLeveraged Agile methodologies to streamline technical workflows, ensuring seamless integration of new technologies and facilitating cross-functional collaboration.\nMentored junior technicians on Agile principles and practices, fostering a culture of agility and responsiveness to change within the team.\nRecognized for proactive identification and resolution of project pain points, delivering solutions under tight timelines, and consistently exceeding customer expectations in an Agile environment.";
let reactcontent =
  "Passionate and dedicated developer with hands-on experience in building dynamic web applications using React.js. I have successfully completed several personal projects demonstrating my proficiency in React.js and JavaScript ES6+. For instance, I developed a responsive web application using React.js, implementing features like routing, state management, and API integration. Another project involved creating a single-page application (SPA) with React.js, where I worked on state management and applied responsive design principles for optimal user experience across devices. Throughout these projects, I maintained clean and organized codebases while leveraging modern JavaScript syntax and best practices. My skills extend to front-end development tools like Webpack and Babel, along with HTML5 and CSS3 for crafting engaging user interfaces. I possess strong problem-solving and debugging abilities, and I thrive in collaborative team environments.";

function Subcard(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <section id="skills">
      <div className="opacity-95 relative overflow-auto bg-white rounded-md  justify-center text-center">
        <div className="flex flex-col p-1">
         
        <div className="text-black text-xs font-bold">
          {props.title}
        </div>
          <div className="p-5 flex justify-center items-center">
            <img
              className=" hover:scale-110 duration-500 object-contain"
              src={props.image}
              alt={props.title}
            ></img>
          </div>
        </div>
        <div className=" bottom-5 right-5 left-5">
          <button
            className="bg-black text-white hover:bg-blue-400  justify-end text-xs px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-200 "
            type="button"
            onClick={() => setShowModal(true)}
          >
            Read More
          </button>{" "}
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex flex-col overflow-auto  text-black fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-auto mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-1 rounded-lg shadow-lg relative  w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">{props.title}</h3>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <p className="text-blueGray-500 md:text-sm text-xs overflow-auto max-h-96 leading-relaxed ">
                    {props.content}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </section>
  );
}

function Cards() {
  return (
    <div class="grid grid-cols-2 md:grid-cols-6 m-5 gap-10 justify-center mb-20">
      <Subcard title="Java & Spring Boot" image={java} content={javacontent} />
      <Subcard title="React Developer" image={react} content={reactcontent} />
      <Subcard title="RPA Specialist" image={rpa} content={rpacontent} />
      <Subcard title="Data Alchemist" image={data} content={datacontent} />
      <Subcard
        title="Technical Architect"
        image={devops}
        content={architectcontent}
      />
      <Subcard title="Agile Maestro" image={agile} content={agilecontent} />
    </div>
  );
}

export default Cards;
