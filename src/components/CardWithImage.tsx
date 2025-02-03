import Image from "next/image";
const CardWithImage = async () => {
  return (
    <div className="my-10">
      <div className="w-full bg-[#f9f9f9] px-4 py-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
          <div className="flex-1 -my-20 bg-white">
            <div className="px-10 shadow-md ">
              <h1 className="text-2xl font-bold mb-2 pt-6">{"How We Work"}</h1>
              <div className="w-16 h-1 bg-blue-400 mb-4"></div>
              <div className="relative">
                <Image
                  src={
                    "https://i.vimeocdn.com/custom_asset/d3f1c74cd6c5cad8d89eebe38155c83d?q=80"
                  }
                  alt="Professional in business  attire"
                  className="w-full h-auto rounded-md"
                  width={300}
                  height={300}
                />
                
              </div>
              <p className="mt-4 text-gray-700 pb-12">
              Create your own website to build a relationship with viewers and sell content.
              </p>
            </div>
          </div>
          <div className="flex-1 flex">
            <div className="aspect-[6/4] relative ">
              <Image
                src={
                  "https://i.vimeocdn.com/custom_asset/d3f1c74cd6c5cad8d89eebe38155c83d?q=80"
                }
                alt="Professional in business attire"
                className="w-full max-w-sm rounded-md absolute -bottom-0"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default CardWithImage;
