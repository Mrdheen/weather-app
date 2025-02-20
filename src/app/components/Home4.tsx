import Image from "next/image";

export default function Tescard(){
    return(
        <div className="w-full flex justify-center items-center">
            <Image
                    src="/Testimonial Card.png"
                    alt="Testimonial Card"
                    width={1330} // Set width to match full screen width
                    height={200}  // Adjust height as needed
                /> 
        </div>
    )
}