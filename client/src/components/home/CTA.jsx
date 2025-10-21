import React from 'react'
import {ArrowRight} from 'lucide-react'

function CTA() {
  return (
 <div className="p-6  md:p-10 text-lg text-center">
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-6">
    
    <h2 className="font-medium md:text-left text-center">
      Build a Professional Resume That Helps You 
      <br className="hidden md:block" /> 
      Stand Out and Get Hired
    </h2>

    <div className="flex bg-green-500 text-white rounded px-6 py-2 items-center gap-2 w-fit">
      <button>Get Started</button>
      <ArrowRight />
    </div>

  </div>
</div>

  )
}

export default CTA