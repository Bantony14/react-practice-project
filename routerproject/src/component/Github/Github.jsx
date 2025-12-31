
import { useState,useEffect } from "react"

import { useLoaderData } from "react-router-dom";
function Github(){
  const data = useLoaderData();

//  const [data,setData] = useState([])

//     useEffect(()=>{

       
//             fetch("https://api.github.com/users/hiteshchoudhary")
//             .then(response => response.json())
//             .then(data => setData(data))
            
//     },[])



    return(
        <>
  <div className="h-100 flex items-center justify-center bg-gray-100 px-4">
  <div
    className="
      w-full max-w-4xl 
      bg-white rounded-3xl shadow-2xl 
      p-6 sm:p-8
      flex flex-col md:flex-row 
      items-center md:items-start
      gap-6 md:gap-10
    "
  >
    {/* Left: Profile Image */}
    <div className="flex-shrink-0">
      <img
        src={data.avatar_url}
        alt="User profile"
        className="
          w-32 h-32 
          sm:w-40 sm:h-40 
          md:w-48 md:h-48 
          rounded-full object-cover 
          border-4 border-orange-500 shadow-lg
        "
      />
    </div>

    {/* Right: User Details */}
    <div className="flex flex-col text-center md:text-left gap-3 md:gap-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
        {data.name}
      </h1>

      <p className="text-gray-600 text-base sm:text-lg">
        @{data.login}
      </p>

      {/* Stats */}
      <div className="flex justify-center md:justify-start gap-6 mt-4">
        <div className="text-center">
          <p className="text-xl sm:text-2xl font-semibold text-gray-800">
            {data.followers}
          </p>
          <p className="text-gray-500 text-sm sm:text-base">Followers</p>
        </div>

        <div className="text-center">
          <p className="text-xl sm:text-2xl font-semibold text-gray-800">
            {data.public_repos}
          </p>
          <p className="text-gray-500 text-sm sm:text-base">Repos</p>
        </div>
      </div>
    </div>
  </div>
</div>


        </>
    )
}

export default Github

// export const GitApiCall = async () => {
//    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
//    return response.json();
// }