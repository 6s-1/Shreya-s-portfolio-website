import React from "react";

function Projects() {

  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed Background */}
      <div
        className="fixed top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url("background_projects.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: -1,
        }}
      ></div>
      {/* <object
        type="image/svg+xml"
        data="public/bg_project-v1.svg"
        className="fixed top-0 left-0 w-full h-full"
        style={{
          zIndex: -1,
        }}
      >
        Your browser does not support SVG.
      </object> */}
      <div
        className="container mx-auto grid grid-cols-3 grid-rows-8 gap-y-3 gap-x-4 p-4"
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
             text-white 
            overflow-hidden
            shadow-lg 
            mx-8
            font-quantico
          "
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Greyish transparent background
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          }}
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
              href="https://github.com/6s-1/AI-CLUB-CHATBOT-Generator"
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
            <h2 className="text-2xl font-bold mb-2">Chatbot Generation Guide</h2>
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
            <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "0.25rem", display: "flex", alignItems: "center" }}>
              Tech Stack:&nbsp;
              <img
                src="chatbot_stack.svg"
                alt="Tech Stack Icon"
                style={{
                  filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))",
                  width: "13rem", // Match the size in the first example
                  height: "3rem", // Match the size in the first example
                  marginLeft: "0.25rem", // Spacing from the text
                }}
              />
            </h3>
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
     text-white  
    justify-start 
    overflow-hidden
    shadow-lg 
    mx-8
  "
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Greyish transparent background
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          }}
        >
          {/* Container for SVG and Code Button */}
          <div className="relative">
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

            {/* Code Button */}
            <a
              href="https://github.com/6s-1/Pantry-Sidekick_GIT-Hackathon-2024"
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
            <h2 className="text-2xl font-bold mb-2">Pantry Sidekick</h2>
            <p className="text-sm md:text-base lg:text-lg mb-2">
              A ML-powered food management app to streamline pantry inventory
              tracking and reduce food waste, created in over 40 hours for the
              Girls in Tech Hackathon 2024.
            </p>

            <h3 className="text-md font-semibold mb-1">Key Features:</h3>
            <ul className="list-disc list-inside text-sm md:text-base lg:text-lg">
              <li>
                Real-time pantry item recognition using YOLOv8 with CUDA and a
                custom Roboflow-trained dataset.
              </li>
              <li>
                Flask-based backend with REST API and responsive HTML/CSS for
                seamless inventory management.
              </li>
              <li>
                ML-powered spoilage prediction and recipe suggestions to
                minimize food waste.
              </li>
            </ul>
            <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "0.25rem", display: "flex", alignItems: "center" }}>
              Tech Stack:&nbsp;
              <img
                src="pantry_stack.svg"
                alt="Tech Stack Icon"
                style={{
                  filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))",
                  width: "18rem", // Match the size in the first example
                  height: "3rem", // Match the size in the first example
                  marginLeft: "0.25rem", // Spacing from the text
                }}
              />
            </h3>
          </div>
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
     text-white 
    items-center 
    justify-start 
    overflow-hidden
    shadow-lg 
    mx-8
  "
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Greyish transparent background
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          }}
        >
          {/* Container for SVG and Code Button */}
          <div className="relative">
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

            {/* Code Button */}
            <a
              href="https://github.com/6s-1/AID-FINDER"
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
            <h2 className="text-2xl font-bold mb-2">Aid-Finder</h2>
            <p className="text-sm md:text-base lg:text-lg mb-2">
              AidFinder is an Android application designed to assist homeless individuals and those facing food insecurity in locating nearby shelters and food banks, featuring map navigation and a review system for real-time, user-friendly support.
            </p>

            <h3 className="text-md font-semibold mb-1">Key Features:</h3>
            <ul className="list-disc list-inside text-sm md:text-base lg:text-lg">
              <li>Real-time geolocation with GPS APIs.</li>
              <li>Map frameworks for dynamic routing to shelters/food banks.</li>
              <li>
                Google Cloud Services(Firebase) for secure storage.
              </li>

            </ul>
            <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "0.25rem", display: "flex", alignItems: "center" }}>
              Tech Stack:&nbsp;
              <img
                src="aid_stack.svg"
                alt="Tech Stack Icon"
                style={{
                  filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))",
                  width: "13rem", // Match the size in the first example
                  height: "3rem", // Match the size in the first example
                  marginLeft: "0.25rem", // Spacing from the text
                }}
              />
            </h3>

          </div>
        </div>


        <div
          className="
    col-span-3 
    row-start-4 
    rounded-xl 
    p-4 
    flex 
    flex-row 
    items-center
     text-white  
    justify-start 
    overflow-hidden
    shadow-lg 
    mx-8
  "
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Greyish transparent background
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          }}
        >
          {/* Container for SVG and Code Button */}
          <div className="relative">
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

            {/* Code Button */}
            <a
              href="https://xd.adobe.com/view/5d2d754b-6f35-47aa-6c67-0677db5b3444-2b1c/"
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
              <span className="material-icons mr-2">run</span>
            </a>
          </div>

          {/* Text and Details Section */}
          <div className="ml-4 flex-grow">
            <h2 className="text-2xl font-bold mb-2">The Gandhian Code</h2>
            <p className="text-sm md:text-base lg:text-lg mb-2">
              Created for the Adobe Creative Challenge, celebrating 150 years of Gandhian virtues with a focus on non-violence and its relevance in modern society.
            </p>
            <h3 className="text-md font-semibold mb-1">Key Features:</h3>
            <ul className="list-disc list-inside text-sm md:text-base lg:text-lg">
              <li>
                Built with Adobe XD featuring scroll-based interactions, smooth
                transitions, and navigable panels.
              </li>
              <li>
                Detailed illustrations and optimized visuals using Adobe Photoshop and
                Adobe Stock.
              </li>
              <li>
                Modular layout showcasing Gandhian movements, ideologies, and policies
                for easy navigation and engagement.
              </li>
            </ul>
            <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "0.25rem", display: "flex", alignItems: "center" }}>
              Tech Stack:&nbsp;
              <img
                src="gandhi_stack.svg"
                alt="Tech Stack Icon"
                style={{
                  filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))",
                  width: "15rem", // Match the size in the first example
                  height: "3rem", // Match the size in the first example
                  marginLeft: "0.25rem", // Spacing from the text
                }}
              />
            </h3>
          </div>
        </div>


        <div
          className="
    col-span-3 
    row-start-5 
    rounded-xl 
    p-4 
    flex 
    flex-row 
    items-center 
     text-white 
    justify-start 
    overflow-hidden
    shadow-lg 
    mx-8
  "
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Greyish transparent background
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          }}
        >
          {/* Container for SVG and Code Button */}
          <div className="relative">
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

            {/* Code Button */}
            <a
              href="https://github.com/6s-1/Century-of-Skies-Analyzing-100-Years-of-Aircraft-Incident-Data-"
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
            <h2 className="text-2xl font-bold mb-2">Aircraft Analysis</h2>
            <p className="text-sm md:text-base lg:text-lg mb-2">
              A comprehensive data analysis project analyzing 100 years of aircraft incidents [1920-2020] using Python libraries uncovering trends in aviation safety, fatalities, and factors through interactive visualizations.
            </p>
            <h3 className="text-md font-semibold mb-1">Key Features:</h3>
            <ul className="list-disc list-inside text-sm md:text-base lg:text-lg">
              <li>Extracted incident data using BeautifulSoup for web scraping.</li>
              <li>Analyzed trends with pandas and numpy, visualized using matplotlib, seaborn, and plotly.</li>
              <li>
                Interactive plots to explore relationships between aircraft types,
                timing, and operator locations.
              </li>
            </ul>
            <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "0.25rem", display: "flex", alignItems: "center" }}>
              Tech Stack:&nbsp;
              <img
                src="aircraft_stack.svg"
                alt="Tech Stack Icon"
                style={{
                  filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))",
                  width: "11rem", // Match the size in the first example
                  height: "3rem", // Match the size in the first example
                  marginLeft: "0.25rem", // Spacing from the text
                }}
              />
            </h3>

          </div>
        </div>


        <div
          className="
    col-span-3 
    row-start-6 
    rounded-xl 
    p-4 
    flex 
    flex-row 
    items-center 
     text-white 
    justify-start 
    overflow-hidden
    shadow-lg 
    mx-8
  "
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Greyish transparent background
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          }}
        >
          {/* Container for SVG and Code Button */}
          <div className="relative">
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

            {/* Code Button */}
            <a
              href="https://github.com/6s-1/Carbon-Emission-Calculator"
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
            <h2 className="text-2xl font-bold mb-2">Carbon Emission Calculator</h2>
            <p className="text-sm md:text-base lg:text-lg mb-2">
              A Carbon Emission Calculator website to assess the carbon footprint of laptops by automating battery report data collection, processing CO2 emissions, and providing user-friendly insights.
            </p>
            <h3 className="text-md font-semibold mb-1">Key Features:</h3>
            <ul className="list-disc list-inside text-sm md:text-base lg:text-lg">
              <li>Backend in Django with APIs to calculate CO2 emissions from battery report data.</li>
              <li>Automated battery report data collection and processing, storing results in a Postgres database.</li>
              <li>Web interface with Bootstrap for viewing power consumption and tracking emissions.</li>
            </ul>
            <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "0.25rem", display: "flex", alignItems: "center" }}>
              Tech Stack:&nbsp;
              <img
                src="carbon_stack.svg"
                alt="Tech Stack Icon"
                style={{
                  filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))",
                  width: "11rem", // Match the size in the first example
                  height: "3rem", // Match the size in the first example
                  marginLeft: "0.25rem", // Spacing from the text
                }}
              />
            </h3>

          </div>
        </div>


        <div
          className="
    col-span-3 
    row-start-7 
    rounded-xl 
    p-4 
    flex 
    flex-row 
    items-center 
     text-white 
    justify-start 
    overflow-hidden
    shadow-lg 
    mx-8
  "
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Greyish transparent background
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          }}
        >
          {/* Container for SVG and Code Button */}
          <div className="relative">
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

            {/* Code Button */}
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiMDdjMjY4YTQtMjI1ZC00OGFhLTk1MGItNTMwNGY5YjRmYzQzIiwidCI6IjJiODMyY2E0LWM0ODQtNDE2Yi04NjE0LTVkNWQ3M2IwYjk0MSJ9"
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
              <span className="material-icons mr-2">run</span>
            </a>
          </div>

          {/* Text and Details Section */}
          <div className="ml-4 flex-grow">
            <h2 className="text-2xl font-bold mb-2">AI-Driven Wildfire Research</h2>
            <p className="text-sm md:text-base lg:text-lg mb-2">
              An AI-driven wildfire risk prediction model on Microsoft Azure, utilizing IoT and satellite data for real-time analytics, paired with a user-friendly web interface for live risk data visualization.
            </p>
            <h3 className="text-md font-semibold mb-1">Key Features:</h3>
            <ul className="list-disc list-inside text-sm md:text-base lg:text-lg">
              <li>
                IoT and satellite remote sensing data utilised via Microsoft Azure for
                real-time wildfire risk prediction.
              </li>
              <li>
                Backend system with optimized data processing and DBMS for seamless
                integration with AI models.
              </li>
              <li>
                Web interface for live risk visualization and predictive analytics to
                support wildfire management.
              </li>
            </ul>
            <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "0.25rem", display: "flex", alignItems: "center" }}>
              Tech Stack:&nbsp;
              <img
                src="wildfire_stack.svg"
                alt="Tech Stack Icon"
                style={{
                  filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))",
                  width: "11rem", // Match the size in the first example
                  height: "3rem", // Match the size in the first example
                  marginLeft: "0.25rem", // Spacing from the text
                }}
              />
            </h3>

          </div>
        </div>
        {/* Section 8 */}
        <div
          className="
            col-span-3 
            row-start-8 
            rounded-xl 
            p-4 
            flex 
            flex-row 
            items-center 
            justify-start 
             text-white 
            overflow-hidden
            shadow-lg 
            mx-8
            font-quantico
          "
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Greyish transparent background
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          }}
        >
          {/* SVG Section */}
          <div className="relative">
            <object
              type="image/svg+xml"
              data="website.svg"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-xl"
              style={{
                filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))",
              }}
            >
              Your browser does not support SVG.
            </object>

            {/* Code Button */}
            <a
              href="https://github.com/6s-1/Shreya-s-portfolio-website"
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
            <h2 className="text-2xl font-bold mb-2">Personal portfolio website</h2>
            <p className="text-sm md:text-base lg:text-lg mb-2">
            A visually engaging and highly responsive personal portfolio website built to effectively highlight my skills, projects, and accomplishments 
            while maintaining a clean and modern aesthetic.  
            </p>

            <h3 className="text-md font-semibold mb-1">Key Features:</h3>
            <ul className="list-disc list-inside text-sm md:text-base lg:text-lg">
            <li>Designed using the Bento Box method for a clean and modular layout.</li>
  <li>Built with custom-built SVG graphics for a unique and engaging design.</li>
  <li>Hosted with GitHub Actions for CI/CD, following an iterative development process.</li>

            </ul>
            <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "0.25rem", display: "flex", alignItems: "center" }}>
              Tech Stack:&nbsp;
              <img
                src="website_stack.svg"
                alt="Tech Stack Icon"
                style={{
                  filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))",
                  width: "18rem", // Match the size in the first example
                  height: "3rem", // Match the size in the first example
                  marginLeft: "0.25rem", // Spacing from the text
                }}
              />
            </h3>
          </div>
        </div>




        {/* Floating Menu Bar
<div
  className="fixed bottom-0 left-1/2 transform -translate-x-1/2 text-white flex justify-around items-center p-4 shadow-md z-50 rounded-lg"
  style={{
    backgroundColor: "rgb(173, 216, 230)", // Solid light blue background
  }}
>
  <button
    className="flex flex-col items-center text-sm text-white rounded-lg px-4 py-2 transition-all hover:opacity-90 focus:outline-none"
    onClick={() => window.scrollTo(0, 0)}
  >
    <span className="material-icons">home</span>
    Home
  </button>
</div> */}
      </div>

    </div>

  );
}

export default Projects;
