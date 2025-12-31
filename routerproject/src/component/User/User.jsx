import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams()
    return(
      <div className=" m-2 w-fully h-20 flex items-center justify-center 
                rounded-2xl bg-orange-700
                text-white text-2xl font-semibold shadow-lg">
  User : {userid}
</div>

    )
}

export default User;