// import './App.css';
import mobile from './images/image-hero-mobile.png'
import desktop from './images/image-hero-desktop.png'
import audiophile from './images/client-audiophile.svg'
import maker from './images/client-maker.svg'
import meet from './images/client-meet.svg'
import databiz from './images/client-databiz.svg'
import Navbar from './compnents/navbar'


function App() {



  return (
    <>

      <Navbar />
      
      <section className='main_section flex flex-col-reverse py-10 md:grid md:gap-10 md:grid-cols-2 md:place-items-center
     max-w-4xl lg:max-w-5xl md:my-auto md:mx-auto  '>
        <article className=' text-center md:text-left px-5 xl:px-0  mt-10 md:mt-0'>
          <h1 className='font-bold text-4xl lg:text-6xl xl:text-7xl mb-10'>Make Remote Work</h1>
          <p className='content mb-10'>Get your team in sync, no matter your location. Streamline
            processes,
            create team rituals, and watch productivuity soar.
          </p>
          <button className='bg-black rounded-lg shadow text-white font-bold
        hover:opacity-75 transition-all duration-150 py-3 px-2 cursor-pointer mb-10 '>Learn more</button>

          <ul className='grid grid-cols-4 gap-1 mt-10 place-items-center md:place-items-start'>
            <li ><img src={databiz} alt="" className='w-16 md:w-24' /></li>
            <li><img src={audiophile} alt="" className='w-16 md:w-24' /></li>
            <li><img src={meet} alt="" className='w-16 md:w-24' /></li>
            <li><img src={maker} alt="" className='w-16 md:w-24' /></li>

          </ul>

        </article>
        <article>
          <picture >
            <source media="(min-width:768px)" srcSet={desktop} />
            <img src={mobile} alt="" className='w-full main_image' />
          </picture>
        </article>
      </section>
    </>
  );
}

export default App;
