import websiteImage1 from '../assets/email-spam.webp';
import websiteImage2 from '../assets/foods.png';
import websiteImage3 from '../assets/blog.png';



export default function Projects(){
    return <section className="flex flex-col justify-center px-5 py-20 text-white main-color" id='Projects1'>
        <div className="w-1/2 ">
        <div className="flex justify-center"> <h1 className='mb-5 text-5xl border-b-4 w-[190px] border-[#4f4f51] font-bold'>Projects</h1></div>
        
        </div>
        <div className="w-full ">
        <div className='flex flex-col gap-5 px-10 md:flex-row'>
            <div className='relative'>
            <img className="h-[200px] w-[500px]" src={websiteImage1}/>
            <div className='project-description'>
                <p className='px-5 py-5 text-center '>An Email spam detector with the help of Machine Learning</p>
            </div>
            </div>
       
        <div className='relative'>
        <img className='h-[200px] w-[500px]' src={websiteImage2}/>
        <div className='project-description'>
                <p className='px-5 py-5 text-center'>A Simple Food Ordering website .built with MERN Stack</p>
            </div>
        </div>
       
        <div className='relative'>
        <img className='h-[200px] w-[500px]' src={websiteImage3}/> 
        <div className='project-description'>
                <p className='px-5 py-5 text-center'>A Simple Blogging Website For Personal use with the help of React.JS</p>
            </div>
        </div>
         
        
        </div>
          
        </div>
    </section>
}