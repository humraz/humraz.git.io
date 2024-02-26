import React from "react"




function Subcard(props) {
    return(
        <div class="w-56 h-100 bg-white rounded-lg flex m-auto justify-center text-center">
                <div class="divide-y divide-gray">
                    <div class="p-5 md:text-xl text-sm">
                        {props.title}
                    </div>
                    <div class="p-5  md:text-xl text-sm">
                        {props.content}
                        <div class="mt-4">
                            <button href="#" class="focus:outline-none focus:ring focus:ring-blue-600 bg-blue-500 hover:bg-blue-400 text-white  md:w-40 w-25 px-2 py-2 inline-block mt-4 rounded m-2 transition">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

function Cards(){
    return (
        <div class="grid grid-flow-col md:grid-rows-1 grid-rows-3 justify-center h-screen md:space-x-16 space-x-5">
            
            
            <Subcard title='Java Development' content=' You have extensive experience in Java development, including frameworks like Java Spring Boot'/>

            <Subcard title='RPA (Robotic Process Automation)' content='You have worked with RPA tools such as Automation Anywhere and have experience in developing bots for automating tasks, showcasing your expertise in process automation'/>

            <Subcard title='Data Analysis and Visualization' content='You have worked on data analysis and visualization tools like Power BI & Tableau, indicating proficiency in interpreting and presenting data'/>

            <Subcard title='Problem Solving and Innovation' content='Your involvement in implementing solutions using Generative AI and Large Language models showcases your problem-solving skills and innovation mindset'/>
            <Subcard title='Leadership and Collaboration' content='Your role in facilitating Googles applied CS with Android course and conducting workshops demonstrates leadership and collaboration skills'/>
            <Subcard title='Agile Methodologies' content='You have followed agile best practices, including participating in Hackathons, indicating adaptability and collaborative skills in agile environments'/>
            
            
    </div>
    );
}



export default Cards