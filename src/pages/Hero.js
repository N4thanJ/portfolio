import React from "react";
import SocialButtons from "./SocialButtons";

function Hero() {
    return (
        <article className="flex lg:flex-row flex-col-reverse justify-evenly h-[calc(100vh-80px)] items-center">
            <div className="">
                <h2 className="font-bold lg:text-5xl text-3xl">Hello,</h2>
                <h2 className="font-bold lg:text-5xl text-3xl">I'm <span className="text-tertiair">Nathan Jordens</span></h2>
                <p className="text-xl pt-2">I'm your web developper</p>

                <a href="#" className="bg-secondary py-1.5 px-3 inline-block rounded-lg text-white mt-5 mb-2 animate-bounce">Learn More!</a>
                <SocialButtons />
            </div>
            <div className="custom-border rounded lg:w-[400px] lg:h-[400px] w-[250px] h-[250px]"></div>
        </article>
    )
}

export default Hero;