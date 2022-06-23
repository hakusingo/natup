import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
// import * as styles from "./header.scss"
import { FiMail } from "@react-icons/all-files/Fi/FiMail"
import { FiInstagram } from "@react-icons/all-files/Fi/FiInstagram"
import { StaticImage } from "gatsby-plugin-image"
import Rellax from "rellax"

const Header = () => {
  const [show, navButtonClick] = useState(false)
  function mailIconHidden() {
    const mailIcon = document.getElementById("mailIcon")
    mailIcon.classList.add(`opacity-5`)
    mailIcon.classList.remove('opacity-100')
  }
  function mailIconAppear() {
    const mailIcon = document.getElementById("mailIcon")
    mailIcon.classList.add(`opacity-100`)
    mailIcon.classList.remove(`opacity-5`)
  }
  function instaIconHidden() {
    const instaIcon = document.getElementById("instaIcon")
    instaIcon.classList.add(`opacity-5`)
    instaIcon.classList.remove('opacity-100')
  }
  function instaIconApper() {
    const instaIcon = document.getElementById("instaIcon")
    instaIcon.classList.add(`opacity-100`)
    instaIcon.classList.remove(`opacity-5`)
  }
  function rellaxStart() {
    var rellax = new Rellax('.rellax', {
      speed: -6,
      center: true,
      // wrapper: null,
      round: true,
      vertical: true
    })
  }
  useEffect(()=>{
    rellaxStart()
  }, [])
  
  return (
    <>
      <nav 
        id="spNav" 
        className={show ? "absolute w-[85%] h-[100vh] ease-out duration-300 bg-mainWhite openSans z-30"
        : "absolute w-[85%] h-[100vh] ease-out duration-300 bg-mainWhite openSans z-20 -translate-x-full"
      }>
        <ul className="p-12">
          <li className="tracking-widest mb-8">
            <Link to="/">
              HOME
            </Link>
          </li>
          <li className="tracking-widest mb-8">
            <Link to="services">
              SERVICES
            </Link>
          </li>
          <li className="tracking-widest mb-8">
            <Link to="gallery">
              GALLERY
            </Link>
          </li>
          <li className="tracking-widest">
            <Link to="contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <header 
        className={show ? "bg-mainWhite text-white transition ease-out duration-300 relative z-20"
          :"bg-main text-white transition ease-out duration-300 relative z-20"
        }>
        <div className="container h-[60px] flex justify-between items-center px-4 mx-auto">
          <Link to="/" className="openSans font-extrabold text-[1.5rem] tracking-[.25em] lg:text-[1.8rem]">
            NATSUP
          </Link>
          <div className="w-8 h-8">
            <div className="hidden lg:flex w-8 h-8">
              <a id="instaIcon" className="transition ease-out duration-300" href="https://google.com" onMouseEnter={mailIconHidden} onMouseLeave={mailIconAppear}>
                <FiInstagram className="w-5 h-5 mt-2 mr-4 opacity-100"/>
              </a>
              <a id="mailIcon" className="transition ease-out duration-300" href="https://google.com" onMouseEnter={instaIconHidden} onMouseLeave={instaIconApper}>
                <FiMail className="w-5 h-5 mt-2 opacity-100"/>
              </a>
            </div>
            <button 
              className={show ? "absolute cursor-pointer z-30 opacity-0 invisible lg:hidden"
              : "absolute cursor-pointer z-30 lg:hidden"}
              onClick={() =>  navButtonClick(!show)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M4 8h16M4 16h16" />
              </svg>
            </button>
            <button 
              className={show ? "absolute cursor-pointer z-30 lg:hidden transition ease-out duration-300"
              : "absolute cursor-pointer z-30 opacity-0 invisible lg:hidden transition ease-out duration-300"}
              onClick={() =>  navButtonClick(!show)}
            >
              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" width="24px" height="24px">
                <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="hero relative">
        <div className="absolute h-[100vh] w-full rellax">
          <div className="bg-[#F5F0EB] h-[510px] w-full -mt-[8rem]"></div>
          <div className="h-[200px] w-full relative">
            <div>
              <StaticImage
                className="h-[2.6rem] w-full mt-4 opacity-20 absolute top-0 left-0 lg:mt-8 lg:h-[3.4rem]"
                src="../images/check.svg"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
              />
            </div>
          </div>
        </div>
        <nav className="hidden container mx-auto relative z-30 lg:block">
          <ul className="flex justify-end pt-8 text-[12px] openSans w-full josefin font-semibold tracking-widest">
            <li className="ml-12 border-transparent border-b-[1px] border-b-transparent transition ease-out duration-300 hover:text-[#af6d55] hover:border-b-[#af6d55]">
              <a href="#">
                ABOUT
              </a>
            </li>
            <li className="ml-12 border-transparent border-b-[1px] border-b-transparent transition ease-out duration-300 hover:text-[#af6d55] hover:border-b-[#af6d55]">
              <a href="#">
                SERVICE
              </a>
            </li>
            <li className="ml-12 border-transparent border-b-[1px] border-b-transparent transition ease-out duration-300 hover:text-[#af6d55] hover:border-b-[#af6d55]">
              <a href="#">
                GALLERY
              </a>
            </li>
            <li className="ml-12 border-transparent border-b-[1px] border-b-transparent transition ease-out duration-300 hover:text-[#af6d55] hover:border-b-[#af6d55]">
              <a href="#">
                BLOG
              </a>
            </li>
            <li className="ml-12 border-transparent border-b-[1px] border-b-transparent transition ease-out duration-300 hover:text-[#af6d55] hover:border-b-[#af6d55]">
              <a href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        <div className="hero-main relative">
          <div className="flex flex-col items-center justify-center pt-12 pb-12 bg-transparent lg:pt-20">
            <StaticImage
              class="w-[90%] lg:w-[70%] bg-transparent"
              src="../images/natupi-hero.png"
              loading="eager"
              placeholder="blurred"
              width={1000}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="hero-pic"
            />
          </div>
          <div className="hero-text w-[90%] mx-auto md:w-[85%]">
            <div className="sm:flex justify-evenly">
              <h2 className="cormorant font-medium text-[3rem] text-[#B06D55] leading-[3.5rem] sm:w-[40%] md:text-[5rem] md:leading-[5rem]">
                Capturing the<br/>
                moments.<br/>
              </h2>
              <div className="sm:w-[40%]">
                <h3 className="openSans mt-8 font-semibold tracking-widest sm:mt-0 md:text-[1.2rem] md:font-semibold">
                  STROMG INTRO HEADING<br className="md:hidden"/>
                  HERE
                </h3>
                <p className="openSans mt-4 leading-[1.6rem] text-[14px] tracking-widest md:text-[1rem]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem dolorem temporibus quibusdam eius maxime!
                </p>
              </div>
            </div>
            <div className="sm:flex justify-evenly">
              <StaticImage
                className="h-[2rem] mt-8 opacity-70 sm:w-[40%] md:h-[2.5rem]"
                src="../images/check.svg"
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
              />
              <div className="mt-8 text-center openSans tracking-widest sm:w-[40%]">
                <Link to="/" className="block py-2 bg-[#D0C9C8] text-[12px] w-[200px] font-semibold  md:w-[200px] ">
                  CONTACT ME&nbsp;&nbsp;&gt;&nbsp;&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Header



