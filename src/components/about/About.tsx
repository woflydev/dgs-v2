import { useEffect } from 'react';
import ImgOne from '../../assets/images/personal-gallery/imgOne.png'
import ImgTwo from '../../assets/images/personal-gallery/imgTwo.png'
import ImgThree from '../../assets/images/personal-gallery/imgThree.png'
import ImgFour from '../../assets/images/personal-gallery/imgFour.png'

const About = () => {
  useEffect(() => {
    document.title = "About | Digital Society";
  })
  return (
    <article className="flex flex-col min-h-screen sm:col-span-5 md:col-span-4 items-center pt-20">
       <h2 className="text-4xl text-center uppercase text-black mt-6">About</h2>
      <section className="flex flex-col items-center mt-10 text-2xl gap-5 text-slate-600 p-2">
        <p className="text-base  sm:text-lg text-center">
          We are the <b>Year 11 Digital Societies</b> class of 2024. 
        </p>
        <p className="text-base  sm:text-lg text-center">
        A few weeks ago, we were tasked with creating gameboards <br></br>
        for a fictional board game: Do You Want To Play Capitalism?
        </p>
        <p className="text-base  sm:text-lg text-center">
        So we did! <br></br>
        </p>
      </section>
      <section className="grid grid-cols-2 sm:flex-row gap-1 p-2 ">
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover rounded-lg"
            src={ImgOne}
            alt="BG 1"
          />
          <p className="font-bold">Gameboard 1</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover rounded-lg"
            src={ImgTwo}
            alt="BG 2"
          />
          <p className="font-bold">Gameboard 2</p>
        </section>
        <section className='pt-4'>
          <img
            className="max-w-full w-56 h-52 object-cover rounded-lg"
            src={ImgFour}
            alt="BG 3"
          />
          <p className="font-bold">Gameboard 3</p>
        </section>
        <section className='pt-4'>
          <img
            className="max-w-full w-56 h-52 object-cover rounded-lg"
            src={ImgThree}
            alt="BG 4"
          />
          <p className="font-bold">Gameboard 4</p>
        </section>
      </section>

      <p className="text-base  sm:text-lg text-center">
        <br></br>
        website by<b> <a href="https://github.com/woflydev/" target='_blank'>enog</a>.</b>
        </p>
    </article>
  )
}

export default About
