import { useEffect } from "react";

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

  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      style={{
        background: "linear-gradient(to right, #D9ED92, #B5E48C, #99D98C, #6DC58D, #52B69A, #34A0A4, #168AAD, #1A759F, #1C5987, #184E77)",
      }}
    >
      <div className="grid h-full w-full grid-cols-10 grid-rows-10 gap-3 p-5 pt-16 xl:m-32 lg:m-16 m:m-4">

        {/* Work Experience Section */}
        <div className="col-span-4 row-span-7 rounded-xl bg-gradient-to-r from-blue-900/80 to-blue-500/50 p-6 overflow-y-scroll text-white" style={{
          background: "linear-gradient(to right, rgba(16, 185, 129, 0.10), rgba(236, 253, 245, 0.10))", // Emerald green tones with transparency
        }}>
          <h2 className="text-2xl font-bold font-[Lora] mb-8 text-center">EXPERIENCE & INTERNSHIPS</h2>

          {/* Timeline Container */}
          <div className="relative border-l-4 border-white/60">
            {/* Software Engineering Intern - Ericsson */}
            <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
              <h3 className="text-xl font-semibold font-[Lora]">Software Engineering Intern, Ericsson</h3>
              <p className="italic mb-2 text-sm">Sep 2024 – Present</p>
              <p className="text-sm">
                Enhanced development efficiency by 80% with an AI coding assistant. Built intelligent log classification systems and optimized 5G integration using Jenkins, Git, and Gerrit.
              </p>
            </div>

            {/* Undergraduate Research Assistant - Rogers Communications */}
            <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
              <h3 className="text-xl font-semibold font-[Lora]">Undergraduate Software Development Research Assistant, Rogers Communications, UBC</h3>
              <p className="italic mb-2 text-sm">May 2024 – Aug 2024</p>
              <p className="text-sm">
                Developed an AI-driven wildfire risk prediction model using IoT data. Created a web interface for real-time analytics and optimized backend DBMS integration.
              </p>
            </div>

            {/* President - Artificial Intelligence Club UBCO */}
            <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
              <h3 className="text-xl font-semibold font-[Lora]">President and Founder, Artificial Intelligence Club UBCO</h3>
              <p className="italic mb-2 text-sm">Sep 2023 – Present</p>
              <p className="text-sm">
                Founded the AI Club with 300+ members. Built an AI Chatbot and organized workshops, hackathons, and industry-led sessions.
              </p>
            </div>

            {/* Technical Intern - Xebia */}
            <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
              <h3 className="text-xl font-semibold font-[Lora]">Technical Intern, Xebia</h3>
              <p className="italic mb-2 text-sm">Jun 2022 – Aug 2022</p>
              <p className="text-sm">
                Built a Carbon Emission Calculator with a Postgres backend. Automated processes using Python and created a functional frontend with JavaScript and Bootstrap.
              </p>
            </div>

            {/* Software Engineering Team Lead - UNESCO */}
            <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
              <h3 className="text-xl font-semibold font-[Lora]">Software Engineering Team Lead, UNESCO World Engineering Day</h3>
              <p className="italic mb-2 text-sm">Jan 2022 – Feb 2022</p>
              <p className="text-sm">
                Led a team to deliver sustainable engineering projects. Demonstrated leadership and collaboration skills to ensure project success.
              </p>
            </div>

            {/* Fellow - YLAC */}
            <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
              <h3 className="text-xl font-semibold font-[Lora]">Fellow, Young Leaders for Active Citizenship (YLAC)</h3>
              <p className="italic mb-2 text-sm">Oct 2021 – Dec 2021</p>
              <p className="text-sm">
                Awarded "Team of the Fellowship" and "Fellow of the Fellowship" for exemplary contributions among 100+ fellows. Showcased leadership and teamwork in impactful projects.
              </p>
            </div>

            {/* Web Development Intern - Project Able */}
            <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
              <h3 className="text-xl font-semibold font-[Lora]">Web Development Intern, Project Able</h3>
              <p className="italic mb-2 text-sm">Aug 2021 – Sep 2021</p>
              <p className="text-sm">
                Contributed to frontend and backend development to improve accessibility. Led team efforts in project management and software development.
              </p>
            </div>

            {/* Sub-Editor - The Global Times */}
            <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
              <h3 className="text-xl font-semibold font-[Lora]">Sub-Editor, The Global Times</h3>
              <p className="italic mb-2 text-sm">Mar 2020 – Mar 2021</p>
              <p className="text-sm">
                Managed and edited articles, coordinated with writers, and ensured high-quality publication standards.
              </p>
            </div>

            {/* Team Lead - Technovation */}
            <div className="mb-8 ml-8 bg-white/10 p-4 rounded-lg shadow-lg relative">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white/60"></div>
              <h3 className="text-xl font-semibold font-[Lora]">Team Lead, Technovation - Tarang</h3>
              <p className="italic mb-2 text-sm">Sep 2019 – May 2020</p>
              <p className="text-sm">
                Led a team of developers to create a web-based solution for a sustainability challenge. Focused on team building, leadership, and project management.
              </p>
            </div>
          </div>
        </div>


        {/* Education Section */}
        <div className="col-span-3 row-span-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-900 p-4 overflow-y-scroll text-white bounce-on-load" style={{
          background: "linear-gradient(to right, rgba(16, 185, 129, 0.10), rgba(236, 253, 245, 0.10))", // Emerald green tones with transparency
        }}>
          <h2 className="text-xl font-bold mb-4">Education</h2>
          <p>More content for scrolling...</p>
        </div>

        <div
          className="col-span-3 row-span-6 rounded-xl flex items-center justify-center bounce-on-load"
          style={{
            background: "linear-gradient(to right, rgba(16, 185, 129, 0.10), rgba(236, 253, 245, 0.10))", // Emerald green tones with transparency
          }}
        > {/* Project Section */}
          <object
            type="image/svg+xml"
            data="project_button.svg"
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => alert("Projects button clicked!")}
          >
            Your browser does not support SVG.
          </object>
        </div>




        {/* Personal Section */}
        <div className="col-span-3 row-span-3 rounded-xl bg-gradient-to-r from-[#5efed3] to-emerald-50 overflow-y-scroll text-white bounce-on-load" style={{
          background: "linear-gradient(to right, rgba(16, 185, 129, 0.10), rgba(236, 253, 245, 0.10))", // Emerald green tones with transparency
        }}>
          <h2 className="text-xl font-bold">Shreya Saxena</h2>
        </div>

        {/* Miscellaneous Section */}
        <div className="col-span-3 row-span-3 rounded-xl bg-gradient-to-r from-yellow-600 to-blue-900 p-4 overflow-y-scroll text-white bounce-on-load" style={{
          background: "linear-gradient(to right, rgba(16, 185, 129, 0.10), rgba(236, 253, 245, 0.10))", // Emerald green tones with transparency
        }}>
          <h2 className="text-xl font-bold">Tech I Love / Miscellaneous</h2>
        </div>

        {/* Resume Section with SVG Button */}
        <div
          className="col-span-3 row-span-2 rounded-xl bg-gradient-to-r from-[#5bb8ff] to-[#d5fed6] flex items-center justify-center bounce-on-load transform transition-transform duration-200 active:scale-95 hover:scale-105 cursor-pointer relative"
          style={{
            background: "linear-gradient(to right, rgba(16, 185, 129, 0.20), rgba(236, 253, 245, 0.20))",
          }}
          onClick={() => {
            console.log("Testing");
            const resumePath = "/Shreya-Saxena-Resume.pdf";
            const anchor = document.createElement("a");
            anchor.href = resumePath;
            anchor.download = "Shreya-Saxena-Resume.pdf";
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
            data="resume_button_try_3.svg"
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

        {/* Contact Section */}
        <div className="col-span-4 row-span-2 rounded-xl bg-gradient-to-r from-pink-600 to-blue-900 p-4 overflow-y-scroll text-white bounce-on-load" style={{
          background: "linear-gradient(to right, rgba(16, 185, 129, 0.10), rgba(236, 253, 245, 0.10))", // Emerald green tones with transparency
        }}>
          <h2 className="text-xl font-bold mb-4">Contact Me</h2>
          <div className="flex justify-around items-center gap-4">
            {/* GitHub Button */}
            <object
              type="image/svg+xml"
              data="GitHub_button.svg"
              className="w-12 h-12 cursor-pointer"
              onClick={() => alert("GitHub button clicked!")}
            >
              Your browser does not support SVG.
            </object>

            {/* Gmail Button */}
            <object
              type="image/svg+xml"
              data="Gmail_button.svg"
              className="w-12 h-12 cursor-pointer"
              onClick={() => alert("Gmail button clicked!")}
            >
              Your browser does not support SVG.
            </object>

            {/* LinkedIn Button */}
            <object
              type="image/svg+xml"
              data="linkedIn_button.svg"
              className="w-12 h-12 cursor-pointer"
              onClick={() => alert("LinkedIn button clicked!")}
            >
              Your browser does not support SVG.
            </object>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
