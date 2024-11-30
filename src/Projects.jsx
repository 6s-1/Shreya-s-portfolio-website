import React from "react";

function Projects() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          "linear-gradient(to right, #D9ED92, #B5E48C, #99D98C, #6DC58D, #52B69A, #34A0A4, #168AAD, #1A759F, #1C5987, #184E77)",
      }}
    >
      <div
        className="container mx-auto grid grid-cols-3 grid-rows-7 gap-y-3 gap-x-4 p-4"
        style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
      >
        {/* Section 1 */}
        <div
          className="
            col-span-3 
            row-start-1 
            rounded-xl 
            p-4 
            flex 
            flex-row 
            items-center 
            justify-start 
            overflow-hidden
            shadow-lg 
            mx-8
            font-lora
          "
        >
          {/* SVG Section */}
          <div className="relative">
            <object
              type="image/svg+xml"
              data="chatbot.svg"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-xl"
              style={{
                filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))",
              }}
            >
              Your browser does not support SVG.
            </object>

            {/* Code Button */}
            <a
              href="https://github.com/your-repo-link"
              target="_blank"
              rel="noopener noreferrer"
              className="
                absolute 
                bottom-4 
                right-4 
                bg-gray-700 
                hover:bg-gray-600 
                text-white 
                font-semibold 
                px-4 
                py-2 
                rounded-lg 
                flex 
                items-center
                text-sm
              "
            >
              <span className="material-icons mr-2">code</span>
            </a>
          </div>

          {/* Text and Details Section */}
          <div className="ml-4 flex-grow">
            <h2 className="text-2xl font-bold mb-2">AI Chatbot Project</h2>
            <p className="text-sm md:text-base lg:text-lg mb-2">
              A modular AI chatbot built using AIML and Java to enhance student
              learning in artificial intelligence. The project emphasizes
              hands-on experiences, open-source collaboration, and
              accessibility.
            </p>

            <h3 className="text-md font-semibold mb-1">Key Features:</h3>
            <ul className="list-disc list-inside text-sm md:text-base lg:text-lg">
              <li>Interactive AI-driven chatbot for learning enhancement.</li>
              <li>Modular design with customizability and scalability.</li>
              <li>Comprehensive setup guide for easy integration and use.</li>
            </ul>
            <h3 className="text-md font-semibold mb-1">Tech Stack:</h3>
          </div>
        </div>

        {/* Section 2 */}
        <div
          className="
            col-span-3 
            row-start-2 
            rounded-xl 
            p-4 
            flex 
            flex-row 
            items-center 
            justify-start 
            overflow-hidden
            shadow-lg 
            mx-8
          "
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            <object
              type="image/svg+xml"
              data="pantry_sidekick.svg"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-xl"
              style={{
                filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))",
              }}
            >
              Your browser does not support SVG.
            </object>
          </a>
        </div>

        {/* Section 3 */}
        <div
          className="
            col-span-3 
            row-start-3 
            rounded-xl 
            p-4 
            flex 
            flex-row 
            items-center 
            justify-start 
            overflow-hidden
            shadow-lg 
            mx-8
          "
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            <object
              type="image/svg+xml"
              data="aid_finder.svg"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-xl"
              style={{
                filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))",
              }}
            >
              Your browser does not support SVG.
            </object>
          </a>
        </div>

        {/* Section 4 */}
        <div
          className="
            col-span-3 
            row-start-4 
            rounded-xl 
            p-4 
            flex 
            flex-row 
            items-center 
            justify-start 
            overflow-hidden
            shadow-lg 
            mx-8
          "
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            <object
              type="image/svg+xml"
              data="gandhian.svg"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-xl"
              style={{
                filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))",
              }}
            >
              Your browser does not support SVG.
            </object>
          </a>
        </div>

        {/* Section 5 */}
        <div
          className="
            col-span-3 
            row-start-5 
            rounded-xl 
            p-4 
            flex 
            flex-row 
            items-center 
            justify-start 
            overflow-hidden
            shadow-lg 
            mx-8
          "
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            <object
              type="image/svg+xml"
              data="aircraft.svg"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-xl"
              style={{
                filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))",
              }}
            >
              Your browser does not support SVG.
            </object>
          </a>
        </div>

        {/* Section 6 */}
        <div
          className="
            col-span-3 
            row-start-6 
            rounded-xl 
            p-4 
            flex 
            flex-row 
            items-center 
            justify-start 
            overflow-hidden
            shadow-lg 
            mx-8
          "
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            <object
              type="image/svg+xml"
              data="carbon.svg"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-xl"
              style={{
                filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))",
              }}
            >
              Your browser does not support SVG.
            </object>
          </a>
        </div>

        {/* Section 7 */}
        <div
          className="
            col-span-3 
            row-start-7 
            rounded-xl 
            p-4 
            flex 
            flex-row 
            items-center 
            justify-start 
            overflow-hidden
            shadow-lg 
            mx-8
          "
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            <object
              type="image/svg+xml"
              data="wildfire.svg"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-xl"
              style={{
                filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))",
              }}
            >
              Your browser does not support SVG.
            </object>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
