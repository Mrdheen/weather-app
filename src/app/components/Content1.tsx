import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimony() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 flex justify-between items-center">
            {/* Left Text */}
            <div>
                <h2 className="text-5xl font-bold text-green-700">
                    Success Stories from Our<br /> 
                    Partners
                </h2>
                <br /> 
                <p className="text-[20px] text-gray-600">
                    Our partners make a tangible impact on the lives of those <br />
                    we serve. Read stories from our partners about their <br />
                    journey with BMCCI, the successes they ve witnessed, and <br />
                    the communities transformed through our shared efforts.
                </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-8">
                <button className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-md border hover:bg-gray-100">
                <ChevronLeft className="w-12 h-12 text-gray-600" />
                </button>
                <button className="w-20 h-20 flex items-center justify-center rounded-full bg-green-700 text-white shadow-md hover:bg-green-800">
                <ChevronRight className="w-12 h-12" />
                </button>
            </div>
        </div>   
    );
  }
  