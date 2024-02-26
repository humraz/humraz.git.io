import React from "react"




function Subcard(props) {
    return(
        <div class="opacity-95 ml-5 mr-5 hover:scale-105 duration-500 overflow-auto bg-white rounded-lg  justify-center text-center">
                <div class="divide-y divide-gray">
                    <div class="p-5 text-sm font-bold">
                        {props.title}
                    </div>
                    <div class="p-5  text-sm">
                        {props.content}
                    </div>
                </div>
                <div>
                  { /* <button href="#" class=" focus:outline-none focus:ring focus:ring-blue-600 bg-blue-500 hover:bg-blue-400 text-white  md:w-40 w-25 px-2 py-2 inline-block mt-4 rounded m-2 transition">Learn More</button>
               */} </div>
            </div>
    )
}

function Cards(){
    return (
        <div class="grid grid-flow-col  md:grid-rows-1 grid-rows-3 justify-center md:space-x-16 space-x-5 gap-y-10 mb-20 mr-2">
            <Subcard title='Java Dynamo' content='I have extensive experience in Java development, specializing in frameworks like Java Spring Boot. My proficiency in backend development ensures robust and scalable solutions.'/>
            <Subcard title='RPA Specialist' content='I have hands-on experience with RPA tools such as Automation Anywhere, crafting bots to automate tasks effectively. My expertise in process automation streamlines operations and enhances efficiency.'/>
            <Subcard title='Data Alchemist' content='I leverage data analysis and visualization tools like Power BI & Tableau to derive actionable insights and present data effectively. My proficiency in interpreting data drives informed decision-making.'/>
            <Subcard title='Innovation Luminary' content='My involvement in implementing solutions using Generative AI and Large Language models showcases your problem-solving skills and innovation mindset'/>
            <Subcard title='Leadership Virtuoso' content='I have a proven track record of leadership, including facilitating Googles applied CS with Android course and conducting workshops. My collaborative approach fosters teamwork and drives project success.'/>
            <Subcard title='Agile Maestro' content='I adhere to agile best practices, actively participating in Hackathons to foster adaptability and collaboration in dynamic environments. My agile mindset drives iterative development and continuous improvement.'/>  
    </div>
    );
}



export default Cards