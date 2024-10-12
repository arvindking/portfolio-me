import AboutImg from '../assets/about.png'
export default function About(){
    return<section className='flex flex-col px-5 text-white md:flex-row bg-primary ' id='About1'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='flex justify-center md:w-1/2'>
           <div className='flex flex-col justify-center'>
           <h1 className='mb-5 text-5xl border-b-4 w-[226px] border-[#2c2b30] font-bold'>About Me</h1>
           <p className='pb-4 '>Hi, My name is Aravind. I am a Full-Stack Web Developer.</p>
           <p className='pb-4 '>I built Websites with React.JS and Tailwind CSS</p>
           <p className='pb-4 '>Im Proficient in Frontend skills like Recat.js, Tailwind.CSS,Sass,CSS3</p>
           <p className='pb-4 '>In Backend I Know Node.JS, Express.JS, MongoDB, and Mongoose</p>
           </div>
        </div>
    </section>
}