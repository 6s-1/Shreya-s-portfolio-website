import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Projects from "./Projects";
import 'simplebar/dist/simplebar.min.css';


//import './Tile.css';

function App() {
  useEffect(() => {
    // Select all elements with the "bounce-on-load" class
    const components = document.querySelectorAll(".bounce-on-load");

    // Loop through each element and add the animation class
    components.forEach((component) => {
      component.classList.add("animate-scale-bounce");

      // Optional: Remove the class after the animation finishes
      component.addEventListener("animationend", () => {
        component.classList.remove("animate-scale-bounce");
      });
    });


  }, []);

  const navigate = useNavigate(); // Hook for programmatic navigation

  // const handleTileHover = (e) => {
  //   const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Random hex color
  //   e.target.style.backgroundColor = randomColor; // Change tile color
  //   setTimeout(() => {
  //     e.target.style.backgroundColor = "grey"; // Reset to grey after 300ms
  //   }, 300);
  // };


  return (
    <>
      {/* Define Routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div
              className="h-screen w-full flex items-center justify-center"

            >
              <div
  className="fixed top-0 left-0 w-full h-full"
  style={{ zIndex: -1 }}
>
  <object
    type="image/svg+xml"
    data="bg_main-v1.svg"
    className="w-full h-full"
  />
</div>


              {/* Tile Animation Grid */}
              {/* <div id="tile-container">
                {Array.from({ length: 10000 }).map((_, index) => (
                  <div
                    key={index}
                    className="tile"
                    onMouseOver={handleTileHover}
                  ></div>
                ))}
              </div> */}
              <div className="grid h-full w-full grid-cols-[repeat(10,_1fr)] grid-rows-[repeat(15,_minmax(50px,_auto))] gap-y-5 gap-x-5 p-4 pr-2 pt-14 xl:m-32 lg:m-16 m:m-4">

                {/* Work Experience Section */}
                <div className="col-start-7 col-end-12 row-start-1 row-end-8 rounded-xl  p-6 overflow-y-scroll  bounce-on-load transform transition-transform duration-200  text-white" style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  
                }}
                >
                  <h2 className="text-2xl font-bold font-[Lora] mb-8 text-center">Experience & Interships</h2>

                  {/* Timeline Container */}
                  <div className="relative border-l-4 border-white/60" data-simplebar>
                    {/* Software Engineering Intern - Ericsson */}
                    <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
                      <h3 className="text-xl font-semibold font-[Lora]">Software Engineering Intern, Ericsson</h3>
                      <p className="italic mb-2 text-sm">Sep 2024 – Present</p>
                    </div>

                    {/* Undergraduate Research Assistant - Rogers Communications */}
                    <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
                      <h3 className="text-xl font-semibold font-[Lora]">Undergraduate Software Development Research Assistant, Rogers Communications, UBC</h3>
                      <p className="italic mb-2 text-sm">May 2024 – Aug 2024</p>
                    </div>

                    {/* President - Artificial Intelligence Club UBC */}
                    <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
                      <h3 className="text-xl font-semibold font-[Lora]">President and Founder, Artificial Intelligence Club UBCO</h3>
                      <p className="italic mb-2 text-sm">Sep 2023 – Present</p>
                    </div>

                    {/* Technical Intern - Xebia */}
                    <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
                      <h3 className="text-xl font-semibold font-[Lora]">Technical Intern, Xebia</h3>
                      <p className="italic mb-2 text-sm">Jun 2022 – Aug 2022</p>
                    </div>

                    {/* Software Engineering Team Lead - UNESCO */}
                    <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
                      <h3 className="text-xl font-semibold font-[Lora]">Software Engineering Team Lead, UNESCO World Engineering Day</h3>
                      <p className="italic mb-2 text-sm">Jan 2022 – Feb 2022</p>
                    </div>

                    {/* Fellow - YLAC */}
                    <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
                      <h3 className="text-xl font-semibold font-[Lora]">Fellow, Young Leaders for Active Citizenship (YLAC)</h3>
                      <p className="italic mb-2 text-sm">Oct 2021 – Dec 2021</p>
                    </div>

                    {/* Web Development Intern - Project Able */}
                    <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
                      <h3 className="text-xl font-semibold font-[Lora]">Web Development Intern, Project Able</h3>
                      <p className="italic mb-2 text-sm">Aug 2021 – Sep 2021</p>
                    </div>

                    {/* Sub-Editor - The Global Times */}
                    <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
                      <h3 className="text-xl font-semibold font-[Lora]">Sub-Editor, The Global Times</h3>
                      <p className="italic mb-2 text-sm">Mar 2020 – Mar 2021</p>
                    </div>

                    {/* Team Lead - Technovation */}
                    <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
                      <h3 className="text-xl font-semibold font-[Lora]">Team Lead, Technovation - Tarang</h3>
                      <p className="italic mb-2 text-sm">Sep 2019 – May 2020</p>
                    </div>
                  </div>
                </div>

                {/* Personal Name Section */}
                <div
                  className="flex items-center justify-center col-start-4 col-end-7 row-start-1 row-end-2 rounded-xl text-white bounce-on-load"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    height: "100%", // Ensure the div has height
                  }}
                >
                  <h2 className="text-2xl font-bold font-[Lora] text-center">SHREYA SAXENA</h2>
                </div>


                {/* Personal Face Section */}
                <div
                  className="flex items-center justify-center col-start-4 col-end-7 row-start-2 row-end-6 rounded-xl text-white bounce-on-load"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    height: "100%", // Ensures the container has a height to center the content
                  }}
                >
                  <object
                    type="image/svg+xml"
                    data="shreya_face_shadow.svg"
                    className="w-full h-full object-cover"
                    style={{
                      filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))",
                      pointerEvents: "none",
                    }}
                  >
                    Your browser does not support SVG.
                  </object>
                </div>

                {/* Education Section */}
                <div className="col-start-4 col-end-7 row-start-6 row-end-11 rounded-xl  p-6 overflow-y-scroll text-white  bounce-on-load transform transition-transform duration-200 custom-scrollbar" style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}>
                  <h2 className="text-2xl font-bold font-[Lora] mb-8 text-center">Education</h2>

                  {/* Timeline Container */}
                  <div className="relative border-l-4 border-white/60">
                    {/* The University of British Columbia */}
                    <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
                      <h3 className="text-xl font-semibold font-[Lora]">The University of British Columbia</h3>
                      <p className="italic mb-2 text-sm">Bachelor's degree, Computer Science (2021 – 2026)</p>
                      <p className="text-sm">
                        Dean’s Honour List | Activities: Artificial Intelligence Club (President & Founder), UBCO Stratoneers Competition Team, Marine Design Competition Team, Piano Club (Managing Director).
                      </p>
                    </div>

                    {/* Amity University (Grade 11-12) */}
                    <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
                      <h3 className="text-xl font-semibold font-[Lora]">Amity International School</h3>
                      <p className="italic mb-2 text-sm">Grade 12 (2019 – 2021)</p>
                      <p className="text-sm">
                        Co-Founder of Tarang, Editor of The Global Times (Senior Editorial Board), Member of Technovation 2020 and International Press AISN, School Basketball Team, School Badminton Team.
                      </p>
                    </div>
                  </div>
                </div>


                {/* Project Section */}
                <div
                  className="col-start-1 col-end-4 row-start-1 row-end-8 rounded-xl flex items-center justify-center bounce-on-load transform transition-transform duration-200 active:scale-95 hover:scale-105 cursor-pointer relative"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                  onClick={() => navigate("/projects")} // Programmatically navigate to /projects
                >
                  <object
                    type="image/svg+xml"
                    data="project_button.svg"
                    className="w-full h-full object-cover"
                    style={{ pointerEvents: "none" }}
                  >
                    Your browser does not support SVG.
                  </object>

                </div>


                {/* Featured Section */}
                <div className="col-start-9 col-end-12 row-start-8 row-end-11 rounded-xl p-6 overflow-y-scroll  bounce-on-load transform transition-transform duration-200 text-white" style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}>
                  <h2 className="text-2xl font-bold font-[Lora] mb-8 text-center">Featured</h2>

                  {/* Timeline Container */}
                  <div className="relative border-l-4 border-white/60">
                    {/* Navigating AI Article */}
                    <div className="mb-8 ml-8 bg-white/10 p-3 rounded-lg shadow-lg relative">
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-white/60"></div>
                      <a
                        href="https://www.thephoenixnews.com/posts/navigating-ai-ubcos-artificial-intelligence-club"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline text-sm font-semibold"
                      >
                        Shreya Saxena featured in Phoenix News
                      </a>
                      <p className="italic mb-1 text-xs">Phoenix News</p>
                      <p className="text-xs">
                        Read about Shreya's work with the AI Club at UBCO and how it’s fostering innovation in artificial intelligence.
                      </p>
                    </div>

                    {/* Instagram Highlights */}
                    <div className="mb-8 ml-8 bg-white/10 p-3 rounded-lg shadow-lg relative">
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-white/60"></div>
                      <a
                        href="https://www.instagram.com/p/C8qM4DHPWwF/?img_index=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline text-sm font-semibold"
                      >
                        Shreya Saxena featured on Instagram
                      </a>
                      <p className="italic mb-1 text-xs">Instagram</p>
                      <p className="text-xs">
                        Highlights from Shreya’s journey with the AI Club and her impactful contributions in AI.
                      </p>
                    </div>
                  </div>
                </div>

               



                {/* Resume Section with SVG Button */}
                <div
                  className="col-start-1 col-end-4 row-start-8 row-end-11 rounded-xl  flex items-center justify-center bounce-on-load transform transition-transform duration-200 active:scale-95 hover:scale-105 cursor-pointer relative"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                  onClick={() => {
                    console.log("Testing");
                    const resumePath = "Shreya_Saxena_Resume.pdf";
                    const anchor = document.createElement("a");
                    anchor.href = resumePath;
                    anchor.download = "Shreya_Saxena_Resume.pdf";
                    console.log(anchor);
                    document.body.appendChild(anchor);
                    anchor.click();
                    document.body.removeChild(anchor);

                    // Show the download bar
                    const downloadBar = document.getElementById("download-bar");
                    if (downloadBar) {
                      downloadBar.style.display = "block";
                      setTimeout(() => {
                        downloadBar.style.display = "none"; // Hide after 3 seconds
                      }, 3000);
                    }
                  }}
                >
                  <object
                    type="image/svg+xml"
                    data="resume_button-3.svg"
                    className="w-full h-full object-cover"
                    style={{ pointerEvents: "none" }}
                  >
                    Your browser does not support SVG.
                  </object>

                  {/* Download Bar */}
                  <div
                    id="download-bar"
                    className="absolute bottom-0 left-0 w-full text-center bg-green-500 text-white py-2 rounded-b-xl"
                    style={{ display: "none" }}
                  >
                    Downloading Shreya Saxena's Resume...
                  </div>
                </div>

                 {/* Contact Buttons */}
                <div
                  className="col-start-7 col-end-9 row-start-8 row-end-11 rounded-xl p-4 text-white bounce-on-load flex flex-col justify-between"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h2 className="text-xl font-bold mb-4 text-center">Contact Me</h2>


                  {/* Contact Buttons */}
                  <div className="flex justify-around items-center gap-4 mt-auto">
                    {/* GitHub Button */}
                    <div
                      className="w-12 h-12 cursor-pointer relative"
                      onClick={() => {
                        window.open("https://github.com/6s-1", "_blank", "noopener noreferrer");
                      }}
                    >
                      <object
                        type="image/svg+xml"
                        data="GitHub_button.svg"
                        className="w-full h-full object-cover"
                        style={{ pointerEvents: "none" }}
                      >
                        Your browser does not support SVG.
                      </object>
                    </div>

                    {/* Gmail Button */}
                    <div
                      className="w-12 h-12 cursor-pointer relative"
                      onClick={() => {
                        window.open(
                          "https://mail.google.com/mail/?view=cm&fs=1&to=shreya.saxena@gmail.com&su=Hello&body=I%20wanted%20to%20get%20in%20touch!",
                          "_blank"
                        );
                      }}
                    >
                      <object
                        type="image/svg+xml"
                        data="Gmail_button.svg"
                        className="w-full h-full object-cover"
                        style={{ pointerEvents: "none" }}
                      >
                        Your browser does not support SVG.
                      </object>
                    </div>



                    {/* LinkedIn Button */}
                    <div
                      className="w-12 h-12 cursor-pointer relative"
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/shreya--saxena/",
                          "_blank",
                          "noopener noreferrer"
                        );
                      }}
                    >
                      <object
                        type="image/svg+xml"
                        data="linkedIn_button.svg"
                        className="w-full h-full object-cover"
                        style={{ pointerEvents: "none" }}
                      >
                        Your browser does not support SVG. {/*message to display on browsers where SVGs dont work*/}
                      </object>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          }
        />

        {/* Project Page */}
        <Route path="/projects" element={<Projects />} />
      </Routes>



    </>
  );
}
export default App;