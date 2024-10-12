import ResumeImg from '../assets/resume.jpg'
export default function Resume(){
    return<section className='flex flex-col px-5 text-white md:flex-row bg-primary ' id='Resume1'>
        <div className='flex justify-center py-5 md:justify-end md:w-1/2 '>
            <img  className='w-[400px]' src={ResumeImg}/>
        </div>
        <div className='flex justify-center md:w-1/2'>
           <div className='flex flex-col justify-center'>
           <h1 className='mb-5 text-5xl border-b-4 w-[180px] border-[#2c2b30] font-bold'>Resume</h1>
           <p className='pb-4 '>You can Download My Resume Here <a className='py-5 btn' href='#'>Download</a></p>
           
           </div>
        </div>
    </section>
}