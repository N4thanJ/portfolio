"use client"

import { useState } from 'react';
import Link from 'next/link';
import { IconBrandLinkedin, IconBrandGithub, IconBrandInstagram, IconDeviceMobileCode, IconSearch, IconDownload } from '@tabler/icons-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen)
  }

  function scrollToSection(event, targetId) {
    event.preventDefault();

    const targetElement = document.querySelector(targetId);
    const offset = 80;

    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: 'smooth'
    });

    setIsMenuOpen(false);
  }

  return (  
    <>
      <nav className="h-[80px] flex justify-end sm:justify-between items-center px-[5%] text-secondary font-bold fixed top-0 left-0 w-full z-10 mix-blend-multiply" id="home">
        <h1 className="text-xl font-bold tracking-tighter hidden sm:block uppercase blended-text">Nathan Jordens</h1>
        <ul className={`gap-4 uppercase hidden md:flex`}>
          <li><Link href="#" onClick={(e) => scrollToSection(e, '#home')}>Home</Link></li>
          <li><Link href="#" onClick={(e) => scrollToSection(e, '#about')}>About</Link></li>
          <li><Link href="#" onClick={(e) => scrollToSection(e, '#skills')}>Skills</Link></li>
          <li><Link href="#" onClick={(e) => scrollToSection(e, '#')}>Work</Link></li>
          <li><Link href="#" onClick={(e) => scrollToSection(e, '#')}>Contact</Link></li>
        </ul>
        <div className="md:hidden">
          <button onClick={handleClick} className="flex flex-col justify-around w-9 h-9 bg-transparent border-none cursor-pointer">
            <span className="block w-full h-1 bg-secondary rounded-md"></span>
            <span className="block w-full h-1 bg-secondary rounded-md"></span>
            <span className="block w-full h-1 bg-secondary rounded-md"></span>
          </button>
        </div>
      </nav>
 
      {isMenuOpen && (
      <nav className="h-screen flex items-center text-white bg-secondary font-semibold fixed top-0 left-0 w-full">
          <ul className="uppercase w-full text-center">
              <li><Link href="#" className="block w-full py-4" onClick={(e) => scrollToSection(e, '#home')}>Home</Link></li>
              <li><Link href="#" className="block w-full py-4" onClick={(e) => scrollToSection(e, '#about')}>About</Link></li>
              <li><Link href="#" className="block w-full py-4" onClick={(e) => scrollToSection(e, '#skills')}>Skills</Link></li>
              <li><Link href="#" className="block w-full py-4" onClick={(e) => scrollToSection(e, '#')}>Work</Link></li>
              <li><Link href="#" className="block w-full py-4" onClick={(e) => scrollToSection(e, '#')}>Contact</Link></li>
          </ul>
      </nav>    
      )}

      <main>
        {/* Home */}
        <section className="odd:bg-primary even:bg-secondary">
          <article className="flex lg:flex-row flex-col-reverse justify-evenly h-[calc(100vh-80px)] items-center bg-blend-lighten">
            <div className="">
              <h2 className="font-bold lg:text-5xl text-3xl">Hello,</h2>
              <h2 className="font-bold lg:text-5xl text-3xl">I'm <span className="text-tertiair">Nathan Jordens</span></h2>
              <p className="text-xl pt-2">I'm your web developper</p>
              <Link href="#" onClick={(e) => scrollToSection(e, '#about')} className="bg-secondary py-1.5 px-3 inline-block rounded-lg text-white hover:text-secondary hover:bg-primary border-2 mt-4 mb-4 font-semibold">Learn More!</Link>
              <article>
                <div className="flex items-center icons">
                  <a href="https://www.linkedin.com/in/nathan-jordens-093b99275/" target="_blank" className="bg-secondary focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2 text-center me-2">
                    <IconBrandLinkedin color="white" size={30}/>
                    <span className="sr-only">Visit my LinkedIn!</span>
                  </a>
                  <a href="https://github.com/N4thanJ" target="_blank" className="bg-secondary focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2 text-center me-2">
                    <IconBrandGithub color="white" size={30}/>
                    <span className="sr-only">Visit my Github!</span>
                  </a>
                  <a href="https://www.instagram.com/nathan.jordenssssss/" target="_blank" className="bg-secondary focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2 text-center me-2">
                    <IconBrandInstagram color="white" size={30}/>
                    <span className="sr-only">Visit my Instagram!</span>
                  </a>
                  </div>
                </article>
              </div>
            <div className="custom-border rounded lg:w-[400px] lg:h-[400px] w-[250px] h-[250px]"></div>
          </article>
        </section>

        {/* About */}
        <section className="odd:bg-primary even:bg-secondary">
          <article>
            <div className="flex flex-col lg:mx-80 mx-5 py-10 justify-center text-white" id="about">
              <h3 className="lg:text-4xl text-3xl font-semibold">Freelancing Journey</h3>
              <small className="hidden lg:block">Celebrating trust, delivering speed, and ensuring reliability every step of the way.</small>
              <p className="text-sm pt-5">Embarking on my freelance journey, I've navigated through uncharted territories, embracing challenges and celebrating victories.</p>
              <p className="text-sm pt-5">Each project undertaken, every hurdle crossed, is a testament to my <span className="font-black text-tertiair underline">dedication, growth, and unwavering commitment </span> 
                  to excellence.</p>     
              <p className="text-sm pt-5">
                  With each client served and every milestone achieved, I continue to chart a course toward success, driven by passion, 
                  fueled by determination, and guided by the belief that the journey itself is as enriching as the destination.
              </p>
            </div>
          </article>
        </section>

        {/* Skills */}
        <section className="odd:bg-primary even:bg-secondary">
          <article className="flex flex-wrap justify-center gap-16 text-center py-20" id="skills">
            <div className="group w-[275px] p-8 transition-all hover:shadow-md duration-300 hover:rounded-3xl">
                <div className="flex justify-center">
                  <IconDeviceMobileCode className="text-grey group-hover:text-secondary" size="52"/>
                </div>
                <div className="pt-10">
                  <h3 className="text-xl font-extrabold pb-2">Compatible</h3>
                  <p className="text-sm text-grey">Ensuring seamless compatibility across a wide range of devices and browsers for optimal user experience.</p>
                </div>
            </div>
            <div className="group w-[275px] p-8 transition-all hover:shadow-md duration-300 hover:rounded-3xl">
              <div className="flex justify-center">
                <IconSearch className="text-grey group-hover:text-red" size="52"/>
              </div>
              <div className="pt-10">
                  <h3 className="text-xl font-extrabold pb-2">SEO</h3>
                  <p className="text-sm text-grey">Implementing effective SEO strategies to boost website visibility and enhance search engine rankings.</p>
              </div>
            </div>
            <div className="group w-[275px] p-8 transition-all hover:shadow-md duration-300 hover:rounded-3xl">
              <div className="flex justify-center">
                <IconDownload className="text-grey group-hover:text-green" size="52"/>
              </div>
              <div className="pt-10">
                <h3 className="text-xl font-extrabold pb-2">Up to Date</h3>
                <p className="text-sm text-grey">Keeping websites up-to-date with the latest technologies and trends for maximum performance.</p>
              </div>
            </div>
          </article>
        </section>
        {/* Work */}
      </main>
      <footer>
        <article className="flex flex-col items-center gap-5 py-10 bg-secondary">
          <div className="text-white text-center">
            <h2 className="text-2xl">Nathan Jordens</h2>
            <p className="text-grey px-5">Join me on my journey on becomming a junior dev!</p>
          </div>
          <div className="flex items-center icons">
            <a href="https://www.linkedin.com/in/nathan-jordens-093b99275/" target="_blank" className="bg-secondary focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2 text-center me-2">
              <IconBrandLinkedin color="#003049" size={32}/>
              <span className="sr-only">Visit my LinkedIn!</span>
            </a>
            <a href="https://github.com/N4thanJ" target="_blank" className="bg-secondary focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2 text-center me-2">
              <IconBrandGithub color="#003049" size={32}/>
              <span className="sr-only">Visit my Github!</span>
            </a>
            <a href="https://www.instagram.com/nathan.jordenssssss/" target="_blank" className="bg-secondary focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2 text-center me-2">
              <IconBrandInstagram color="#003049" size={32}/>
              <span className="sr-only">Visit my Instagram!</span>
            </a>
          </div>
        </article>

        <article className="bg-seablue text-white p-4 text-sm flex md:flex-row flex-col justify-between">
            <p>Copyright &copy;2024 <a className="text-tertiair underline text-center" href="https://github.com/N4thanJ" target="_blank">N4thanJ</a></p>
            <nav className="md:block hidden">
                <ul className="flex gap-2">
                  <li><Link href="#" onClick={(e) => scrollToSection(e, '#home')}>Home</Link></li>
                  <li><Link href="#" onClick={(e) => scrollToSection(e, '#about')}>About</Link></li>
                  <li><Link href="#" onClick={(e) => scrollToSection(e, '#skills')}>Skills</Link></li>
                  <li><Link href="#" onClick={(e) => scrollToSection(e, '#')}>Work</Link></li>
                  <li><Link href="#" onClick={(e) => scrollToSection(e, '#')}>Contact</Link></li>
                </ul>
            </nav>
        </article>
      </footer>
    </>
  );
}