import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react';

const Slider = () => {

    return (
        <>
            <div className="slider">
                <div className="slides">
                    <div id="slide-1"><p>Image 1</p></div>
                    <div id="slide-2"><p>Image 2</p></div>
                    <div id="slide-3"><p>Image 3</p></div>
                    <div id="slide-4"><p>Image 4</p></div>
                    <div id="slide-5"><p>Image 5</p></div>
                </div>
            </div>
        </>
    );
}

export default Slider;