import React from "react"

function Timeline(){
    return(
        <div className="bg-white md:m-32 m-5  mb-20 justify-center h-full items-center rounded-3xl md:p-20 p-5">   
            <ol class="relative border-s border-gray-200 dark:border-gray-700 ">                               
                <Item date="03/2022-Present" title="Senior Technical Specialist & Technical Lead" description="Experienced software professional specializing in developing custom solutions for telecommunications. Led end-to-end development, testing, and deployment of Automation Platform As A Service (APaaS), resulting in $1.8 million annual savings. Recognized for implementing solutions that generated $5 million in revenue and saved $788K through process enhancements. Proactively monitored technical metrics using Power BI Dashboards, earning prestigious awards like the Connection Award by ATT. Proficient in agile methodologies, automation tools, and system analysis. Skilled in training and fostering a culture of continuous learning."/>  
            </ol>
        </div>
    );
}

function Item(props) {
    return (
        <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-bold leading-none text-black-400 dark:text-gray-500">{props.date}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{props.title}</h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{props.description}</p>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg></a>
        </li>
    );
}

export default Timeline