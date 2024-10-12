import HeroImg from '../assets/hero.png'
import{ AiOutlineTwitter, AiOutlineGithub , AiOutlineInstagram} from "react-icons/ai"

export default function Hero(){
    return<section className='flex flex-col justify-center px-5 py-32 text-white main-color md:flex-row' id='Hero1'>
       <div className='flex flex-col md:w-1/2'>
       <h1 className='text-6xl font-hero-font'>Hi,<br/> Im Aravind
       <p className='text-2xl '>Im a Full-Stack Developer</p> </h1>
       <div className='flex py-5'>
       <a href='#' className='pr-3 hover:text-black'><AiOutlineTwitter size={35}/></a>
       <a href='#' className='pr-3 hover:text-black'><AiOutlineGithub  size={35}/></a>
       <a href='#'  className=' hover:text-black'><AiOutlineInstagram  size={35}/></a>
       </div>
       </div>
       <img  className="md:w-1/3" src={HeroImg}/>
    </section>
}