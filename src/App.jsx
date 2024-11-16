function App() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-900">
      <div className="grid h-full w-full grid-cols-10 grid-rows-10 gap-3 p-5 pt-16 xl:m-32 lg:m-16 m:m-4">
        {/* Work Experience Section */}
        <div className="col-span-4 row-span-7 rounded-xl bg-gradient-to-r from-red-600 to-yellow-900 p-6 overflow-y-scroll text-white">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Software Engineering Intern, Ericsson</h3>
              <p className="italic">Sep 2024 – Present</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>
                  Collaborated with global teams to implement an AI coding assistant using LLMs and NLP, enhancing code templating and dynamic code reviews, resulting in an 80% improvement in development efficiency.
                </li>
                <li>
                  Engineered solutions using Citrix, Linux, and SonarQube for intelligent log classification with ML techniques like Spectral Clustering, Word2Vec, and LDA. Reduced troubleshooting time.
                </li>
                <li>
                  Ensured seamless integration/optimization of 5G features using Jenkins, Git, and Gerrit in a Java, React, and Angular stack.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Undergraduate Software Development Research Assistant, Rogers Communications, UBC</h3>
              <p className="italic">May 2024 – August 2024</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>
                  Collaborated in a team of 10+ to develop an AI-driven wildfire risk prediction model on Microsoft Azure, leveraging IoT and satellite remote sensing data.
                </li>
                <li>
                  Engineered a user-friendly web interface to display live wildfire risk data and predictive analytics.
                </li>
                <li>
                  Worked on backend development (DBMS), optimizing data integration and processing for enhanced AI model performance.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">President and Founder, Artificial Intelligence Club UBCO</h3>
              <p className="italic">Sep 2023 – Present</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>
                  Founded the Artificial Intelligence Club with over 300+ members and spearheaded a team of 5+ developers.
                </li>
                <li>
                  Built the club software project—AI Chatbot—using Java and AIML and conducted workshops on programming.
                </li>
                <li>
                  Organized hackathons and informative sessions on version control, software engineering, and AI in collaboration with industry experts.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Technical Intern, Xebia</h3>
              <p className="italic">Jun 2022 – Aug 2022</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>
                  Constructed a Carbon Emission Calculator, collaborating with a team of 5+ developers and building a robust backend with a Postgres database.
                </li>
                <li>
                  Implemented task automation to process battery reports using Python scripting and JSON.
                </li>
                <li>
                  Created the frontend using CSS, JavaScript, and Bootstrap and presented findings to the company in sprints, following Agile methodologies and the SDLC.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="col-span-3 row-span-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-900 p-4 overflow-y-scroll text-white">
          <h2 className="text-xl font-bold mb-4">Education</h2>
          <p>More content for scrolling...</p>
        </div>

        {/* Projects Section with SVG Button */}
        <div className="col-span-3 row-span-6 rounded-xl bg-gradient-to-r from-white to-white p-4 flex items-center justify-center">
          <object
            type="image/svg+xml"
            data="Project_loader_button.svg"
            className="w-full h-full object-contain cursor-pointer"
            onClick={() => alert('Projects button clicked!')}
          >
            Your browser does not support SVG.
          </object>
        </div>

        {/* Personal Section */}
        <div className="col-span-3 row-span-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-900 p-4 overflow-y-scroll text-white">
          <h2 className="text-xl font-bold">Shreya Saxena</h2>
        </div>

        {/* Miscellaneous Section */}
        <div className="col-span-3 row-span-3 rounded-xl bg-gradient-to-r from-yellow-600 to-blue-900 p-4 overflow-y-scroll text-white">
          <h2 className="text-xl font-bold">Tech I Love / Miscellaneous</h2>
        </div>

        {/* Resume Section with SVG Button */}
        <div className="col-span-3 row-span-2 rounded-xl bg-[#C4FAEE] p-4 flex items-center justify-center">
          <object
            type="image/svg+xml"
            data="resume_button.svg"
            className="w-full h-full object-contain cursor-pointer"
            onClick={() => alert('Resume button clicked!')}
          >
            Your browser does not support SVG.
          </object>
        </div>

        {/* Contact Section */}
        <div className="col-span-4 row-span-2 rounded-xl bg-gradient-to-r from-pink-600 to-blue-900 p-4 overflow-y-scroll text-white">
          <h2 className="text-xl font-bold">Contact Me</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
