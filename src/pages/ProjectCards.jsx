import React from "react";
import { config } from '@fortawesome/fontawesome-svg-core'
import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry, faLongArrowDown, faMagnifyingGlass, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false

function ProjectCards() {
    return (
        <article className="flex flex-wrap justify-evenly text-center py-20">
            <div className="w-[250px] py-10">
                <div className="text-xs">
                    <FontAwesomeIcon icon={faMobileScreenButton} size="5x"/>
                </div>
                <div className="pt-10">
                    <h3 className="text-xl">Compatible</h3>
                    <p className="text-sm text-grey">
                        Ensuring seamless compatibility across a wide range of devices and browsers for optimal user experience.
                    </p>
                </div>
            </div>
            <div className="w-[250px] py-10 ">
                <div className="text-xs">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="5x"/>
                </div>
                <div className="pt-10">
                    <h3 className="text-xl">SEO</h3>
                    <p className="text-sm text-grey">
                        Implementing effective SEO strategies to boost website visibility and enhance search engine rankings.
                    </p>
                </div>
            </div>
            <div className="w-[250px] py-10">
                <div className="text-xs">
                    <FontAwesomeIcon icon={faLongArrowDown} size="5x"/>
                </div>
                <div className="pt-10">
                    <h3 className="text-xl">Up to Date</h3>
                    <p className="text-sm text-grey">
                        Keeping websites up-to-date with the latest technologies and trends for maximum performance.
                    </p>
                </div>
            </div>
        </article>
    );
}

export default ProjectCards;

