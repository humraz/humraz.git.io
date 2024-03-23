import React, { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000 
        ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

function Timeline() {
  return (
    <section id="experience">
      <div className="bg-white md:m-32 m-5  mb-20 justify-center h-full items-center rounded-3xl md:p-20 p-5">
        <ol class="relative border-s border-gray-200 ">
          <RevealOnScroll>
            <Item
              date="03/2022 - Present"
              title="AT&T - Senior Technical Specialist & Technical Lead"
              description="Experienced Java and Spring Boot professional specializing in developing custom solutions for telecommunications. Led end-to-end development, testing, and deployment of Automation Platform As A Service (APaaS), resulting in $1.8 million annual savings. Recognized for implementing solutions that generated $5 million in revenue and saved $788K through process enhancements. Proactively monitored technical metrics using Power BI Dashboards, earning prestigious awards like the Connection Award by ATT. Proficient in agile methodologies, automation tools, and system analysis. Skilled in training and fostering a culture of continuous learning."
              content="Developed custom software solutions to address unique business requirements, driving overall operational improvements by proactively developing, testing and deploying an Automation Platform As A Service(APaaS) solution that was directly responsible for at least $1.8 million in annual savings. Was directly involved in the end to end implementation, testing and set up of the entire platform. The platform was set up in Java Spring Boot and was developed end to end following best practices and was later deployed to the Azure Cloud Services. Worked on the end to end requirement gathering, cross team collaboration and development, testing and deployment of multiple automation services in Java Spring boot
            Was highly awarded for setting up a new implementation in a short period of time that had directly translated into ~$5Million of revenue and for setting up a completely new channel of communication with the end customers. Worked on proactively identifying areas of improvement and enhanced existing solutions in the project that translated to $788K of estimated saving by reducing AHT and Customer callbacks and reducing the latency of the services further improving customer satisfaction. Proactively set up Power BI Dashboards to monitor the technical metrics of the deployed services that was critical in proactively identifying and resolving issues before customers and agents were impacted
            Was rewarded with the prestigious Connection Award by ATT for always proactively identifying and resolving pain points in the project and for delivering solutions under tight timelines. Proactively identified and implemented solutions using Generative AI and Large Language models to help streamline BAU processes in the team. Was tasked with showcasing the same during leadership visits which was highly appreciated. Collaborated with the development and product teams to effectively implement and deploy services at scale following agile best practices(Certified SAFe 5 Architect). Worked on multiple automation tools from Power Automate to Staviso automation platform to develop and deploy various automations within the telecom industry. Participated and bagged prizes across multiple Hackathons conducted in AT&T. Streamlined technical workflows for enhanced productivity through the implementation of automation tools. Collaborated with cross-functional teams to ensure seamless integration of new technologies into existing systems. Conducted thorough system analysis, identifying opportunities for performance enhancements and cost savings. Trained junior technicians on industry best practices and company-specific procedures, fostering a culture of continuous learning and professional growth.
            "
            />
          </RevealOnScroll>
          <RevealOnScroll>
            <Item
              date="10-2018 - 02/2022"
              title="Deloitte USI - Consultant"
              description="Experienced RPA professional with a proven track record of leveraging automation, VBA tools, and data analysis to drive operational efficiency and cost savings. Successfully developed over 40 bots, saving clients 35,000+ hours annually through automation of maintenance tasks. A notable achievement includes creating a large load bot that streamlined medication record updates, saving 2,500 hours of manual effort annually. Proficient in identifying pain points and implementing AI & ML solutions to optimize workflows and enhance user experience. Demonstrated ability to showcase innovative tools and accelerators to clients, ensuring clear understanding of automation strategies."
              content="Worked on 40+ bots which saved clients at least 35000+ hours annually by automating several maintenance tasks, One example is a large load bot that was built for the client that was able to update thousands of medication records at once with minimal to no Interaction from the analysts saving at least 2500 hours of manual effort annually -Created tools in VBA to increase operating efficiency of analysts and streamline data acquisition to ensure data sent to the bots for processing is in the correct format. Worked on several firm initiatives to identify and correct pain points for the client through data analysis and worked on AI & ML use cases to gather patient insights and streamline user workflows. Created repositories to showcase the innovative tools and accelerators used in the project during client visits which ensured more visual clarity on the automation accelerators used in the team."
            />
          </RevealOnScroll>
        </ol>
      </div>
    </section>
  );
}
function Item(props) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <li class="mb-10 ms-4">
      <div class="absolute w-3 h-3 text-black bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
      <time class="mb-1 text-sm font-bold leading-none text-black-400">
        {props.date}
      </time>
      <h3 class="text-lg font-semibold text-black">
        {props.title}
      </h3>
      <p class="mb-4 text-base font-normal text-black">
        {props.description}
      </p>
      <button
        onClick={() => setShowModal(true)}
        type="button"
        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
      >
        Read More
      </button>
      {showModal && (
        <Modal
          title={props.title}
          content={props.content}
          setShowModal={setShowModal}
        />
      )}
    </li>
  );
}

function Modal(props) {
  return (
    <>
      <div className="justify-center text-black items-center flex flex-col overflow-auto  fixed inset-0 z-50 outline-none focus:outline-none">
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
                onClick={() => props.setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
export default Timeline;
