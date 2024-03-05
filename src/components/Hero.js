import React from "react";
import SocialButtons from "./SocialButtons";

function Hero() {
    return (
        <article className="flex lg:flex-row flex-col-reverse justify-evenly h-[calc(100vh-80px)] items-center">
            <div className="">
                <h2 className="font-bold lg:text-5xl text-3xl">Hello,</h2>
                <h2 className="font-bold lg:text-5xl text-3xl">I'm <span className="text-midnight">Nathan Jordens</span></h2>
                <p className="text-xl">I'm your web developper</p>

                <a href="#" className="bg-midnight p-2 inline-block rounded-lg text-white mt-5">Learn More!</a>
                <SocialButtons />
            </div>
            <div class="custom-border rounded border border-black lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] bg-midnight"></div>
        </article>
    )
}

export default Hero;