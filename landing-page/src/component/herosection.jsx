
import video1 from '../images/video1.mp4'
import video2 from '../images/video2.mp4'

const Herosection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">virtual build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">{""} for developers</span>
        </h1> 
        <p className="mt-4 text-lg text-center gray-text-neutral-500-mx-w-4xl">
            king abdirizak his first landing page
        </p>
        <div className="flex justify-center my-10">
          <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">start for free</a>
          <a href="" className="py-3 px-4 mx-3 rounded-md border">documentation</a>
        </div>
        <div className="flex justify-center mt-10">
          <video autoPlay loop muted className="rounded-lg w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4" src={video1} type='video/mp4'/>
          <video autoPlay loop muted className="rounded-lg w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4" src={video2} type='video/mp4'/>
        </div>

    </div>
  ) 
}

export default Herosection