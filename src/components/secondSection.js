import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
// import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const SecondSection = () => {
  let iO = () => {
    const ioTargets = document.querySelectorAll('.ioTarget')
    const cb = (entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          console.log(entry.target)
          entry.target.classList.add("fadeIn")
          observer.unobserve(entry.target)
        }
      })
    }
    const options = {
      root: null,
      rootMargin: "-400px 0px",
    }
    const io = new IntersectionObserver(cb, options)
    ioTargets.forEach(target => io.observe(target))
  }
  useEffect(()=>{
    iO()
  }, [])

  return (
    <div className="bg-main mt-16 pt-24 pb-24 md:mt-[10rem] relative z-20">
      <div className="sm:flex sm:w-[90%] sm:mx-auto sm:gap-8 sm:max-w-[1200px] md:gap-20">
        <div className="ioTarget w-[80%] mx-auto sm:max-w-[33%]">
          <StaticImage
            className="h-[60%]"
            src="../images/second-section-pic1.jpeg"
            loading="lazy"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
          <div className="w-full text-center text-white -mt-4">
            <StaticImage
              className="h-[2rem] w-[50%]"
              src="../images/check-white.svg"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <h3 className="cormorant mt-8 text-[2.2rem] tracking-[.4rem] font-light">one.</h3>
            <p className="josefin text-[14px] tracking-[.1rem] font-[200]">CONTENT CREATION</p>
            <div>
              <a href="/" className="josefin inline-block mt-4 text-[12px] tracking-[.1rem] font-light bg-brown py-3 px-8">LEARN MORE &gt; &gt;</a>
            </div>
          </div>
        </div>
        <div className="ioTarget w-[80%] mx-auto mt-12 sm:mt-0 sm:max-w-[33%]">
          <StaticImage
            className=""
            src="../images/second-section-pic2.jpeg"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
          <div className="w-full text-center text-white -mt-4">
            <StaticImage
              className="h-[2rem] w-[50%]"
              src="../images/check-white.svg"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <h3 className="cormorant mt-8 text-[2.2rem] tracking-[.4rem] font-light">two.</h3>
            <p className="josefin text-[14px] tracking-[.1rem] font-[200]">CONTENT CREATION</p>
            <div>
              <a href="/" className="josefin inline-block mt-4 text-[12px] tracking-[.1rem] font-light bg-brown py-3 px-8">LEARN MORE &gt; &gt;</a>
            </div>
          </div>
        </div>
        <div className="ioTarget w-[80%] mx-auto mt-12 sm:mt-0 sm:max-w-[33%]">
          <StaticImage
            className=""
            src="../images/second-section-pic3.jpeg"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
          <div className="w-full text-center text-white -mt-4">
            <StaticImage
              className="h-[2rem] w-[50%]"
              src="../images/check-white.svg"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <h3 className="cormorant mt-8 text-[2.2rem] tracking-[.4rem] font-light">one.</h3>
            <p className="josefin text-[14px] tracking-[.1rem] font-[200]">CONTENT CREATION</p>
            <div>
              <a href="/" className="josefin inline-block mt-4 text-[12px] tracking-[.1rem] font-light bg-brown py-3 px-8">LEARN MORE &gt; &gt;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection
