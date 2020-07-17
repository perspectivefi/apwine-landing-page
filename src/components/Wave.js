import React from "react"

const Wave = ({ position }) => (position === "top" ?
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 90 1440 150" className="text-blue-500 bg-white">
        <path fill="currentColor" fill-opacity="1" d="M0,192L40,202.7C80,213,160,235,240,229.3C320,224,400,192,480,165.3C560,139,640,117,720,133.3C800,149,880,203,960,213.3C1040,224,1120,192,1200,165.3C1280,139,1360,117,1400,106.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
    </svg>
    :
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 120 1440 80" className="text-blue-500 bg-white">
        <path fill="currentColor" fill-opacity="1" d="M0,128L80,138.7C160,149,320,171,480,170.7C640,171,800,149,960,149.3C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>

)

export default Wave