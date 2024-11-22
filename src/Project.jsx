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
      <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-y-3 gap-x-2 p-20 pt-24 xl:m-0 lg:m-20 m:m-4"
      style={{
        gridTemplateRows: "1fr 1fr",
        height: "100vh",
      }}
      >

        {/* First Section */}
        <div
          className="col-start-1 col-end-2 row-start-1 row-end-2 rounded-xl bg-gradient-to-r from-green-600 to-blue-900 p-4 text-white text-wrap"
          style={{
            background:
              "linear-gradient(to right, rgba(16, 185, 129, 0.10), rgba(236, 253, 245, 0.10))",
          }}
        >
          <h2 className="text-xl font-bold">Section 1</h2>
          <object
                    type="image/svg+xml"
                    data="chatbot.svg"
                    className="w-full h-full object-cover"
                    style={{
                      filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))"
                    }}
                  >
                    Your browser does not support SVG.
                  </object>
        </div>

        {/* Second Section */}
        <div
          className="col-start-2 col-end-3 row-start-1 row-end-2 rounded-xl bg-gradient-to-r from-green-600 to-blue-900 p-4 text-white text-wrap"
          style={{
            background:
              "linear-gradient(to right, rgba(16, 185, 129, 0.10), rgba(236, 253, 245, 0.10))",
          }}
        >
          <h2 className="text-xl font-bold">Section 2</h2>
        </div>

        {/* Third Section */}
        <div
          className="col-start-3 col-end-4 row-start-1 row-end-2 rounded-xl bg-gradient-to-r from-red-600 to-blue-900 p-4 text-white text-wrap"
          style={{
            background:
              "linear-gradient(to right, rgba(16, 185, 129, 0.10), rgba(236, 253, 245, 0.10))",
          }}
        >
          <h2 className="text-xl font-bold">Section 3</h2>
        </div>

        {/* Fourth Section */}
        <div
          className="col-start-1 col-end-2 row-start-2 row-end-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-900 p-4 text-white text-wrap"
          style={{
            background:
              "linear-gradient(to right, rgba(16, 185, 129, 0.10), rgba(236, 253, 245, 0.10))",
          }}
        >
          <h2 className="text-xl font-bold">Section 4</h2>
        </div>

        {/* Fifth Section */}
        <div
          className="col-start-2 col-end-3 row-start-2 row-end-3 rounded-xl bg-gradient-to-r from-teal-600 to-blue-900 p-4 text-white text-wrap"
          style={{
            background:
              "linear-gradient(to right, rgba(16, 185, 129, 0.10), rgba(236, 253, 245, 0.10))",
          }}
        >
          <h2 className="text-xl font-bold">Section 5</h2>
        </div>

        {/* Sixth Section */}
        <div
          className="col-start-3 col-end-4 row-start-2 row-end-3 rounded-xl bg-gradient-to-r from-orange-600 to-blue-900 p-4 text-white text-wrap "
          style={{
            background:
              "linear-gradient(to right, rgba(16, 185, 129, 0.10), rgba(236, 253, 245, 0.10))",
          }}
        >
          <h2 className="text-xl font-bold">Section 6</h2>
        </div>
        

      </div>
    </div>
  );
}

export default Projects;