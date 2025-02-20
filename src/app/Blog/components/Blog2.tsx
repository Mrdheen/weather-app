   
   import Image from "next/image";
   
   export default function SectionDownBlog() {
       return (
         <div className="w-full flex flex-col mt-8">
            <div className="mb-8">
                <Image
                    src="/Content Cards V8.png"
                    alt="Image Container"
                    width={1440} // Set width to match full screen width
                    height={1488}  // Adjust height as needed
                    className="w-full h-auto"
                />
            </div>
         </div>
       );
     }
     
  