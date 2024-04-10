import * as React from "react";
import "./eyesAnimations.css"
import { useState } from "react";

const Expresions = (props) => {
    const [emotion, setEmotion] = useState('normal')


    return (
        <svg
            className={`eyes-container ${emotion}`}
            id="eyes"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 300 300"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            onMouseOver={() => { setEmotion("angry") }}
            onMouseLeave={() => { setEmotion("angry-to-normal") }}
            {...props}
        >
            <ellipse
                id="right-eye"
                className="eyeglobe"
                rx={55.503293}
                ry={51.481656}
                transform="translate(87.911571 98.518345)"
                fill="#d2dbed"
                strokeWidth={0}
            />
            <ellipse
                className="eyeglobe"
                id="left-eye"
                rx={55.503293}
                ry={51.481656}
                transform="matrix(1 0 0 0.999998 213.04241 98.518447)"
                fill="#d2dbed"
                strokeWidth={0}
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <ellipse
                id="eyelid-left"
                rx={55.503293}
                ry={51.481656}
                transform="translate(87.911571 201.481656)"
                fill="#fffefe"
                strokeWidth={0}
            />
            <ellipse
                id="eyelid-right"
                rx={55.503293}
                ry={51.481656}
                transform="translate(213.04241 201.481656)"
                fill="#fffefe"
                strokeWidth={0}
            />

            <rect
                id="left-brow"
                width={127.470832}
                height={42.531728}
                rx={0}
                ry={0}
                transform="translate(16.858272 4.505166)"
                fill="#fffefe"
                strokeWidth={0}
            />
            <rect
                id="right-brow"
                width={127.470832}
                height={42.531728}
                rx={0}
                ry={0}
                transform="translate(157.539118 4.505166)"
                fill="#fffefe"
                strokeWidth={0}
            />

        </svg>
    );
}
export default Expresions;