import LatestNews from "@/components/ui/LatestNews";
import World from "@/components/ui/World";



const HomePage = () => {
  return (
    <div className="grid grid-cols-12 px-28 my-5 gap-5">
      <div className="col-span-8">
        <h1 className="text-xl font-semibold text-gray-600 mt-3 mb-5 border-b-4 pl-8 pb-2 relative">Latest News
          <div className="border-b-4 border-rose-400 w-48 absolute -bottom-1 left-0"></div>
        </h1>
        <LatestNews></LatestNews>
      </div>
      <div className="col-span-4">
        <h1 className="text-xl font-semibold text-gray-600 mt-3 mb-5 border-b-4 pl-8 pb-2 relative">World
          <div className="border-b-4 border-rose-400 w-36 absolute -bottom-1 left-0"></div>
        </h1>
        <World></World>
      </div>
    </div>
  );
};

export default HomePage;