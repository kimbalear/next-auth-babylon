import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react';

const Slider = () => {

    return (
        <>
            <div className="slider">
                <div className="slides">
                    <div id="slide-1">Image 1</div>
                    <div id="slide-2">Image 2</div>
                    <div id="slide-3">Image 3</div>
                    <div id="slide-4">Image 4</div>
                    <div id="slide-5">Image 5</div>
                </div>
            </div>
        </>
    );
}

export default Slider;