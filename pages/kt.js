import React from 'react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';

const Kt = () => {

    return (
        <div className='
        p-10
        bg-zinc-50'>
            <div className='
            text-7xl
            p-10
            flex
            flex-column
            items-center
            justify-center
            m-1
            
            rounded-xl
            bg-purple-300
            text-purple-900'>
                <p>Hello, i'm <span className='text-violet-950'>Keshi</span></p>
            </div>
            <div className='
            flex
            flex-row
            justify-between
            h-100px
            '>
                <div className='
                p-5
                rounded-xl
                bg-purple-300
                m-1
                '>
                    <Image src='/shiro.jpg'
                    width={200}
                    height={100}
                    className='rounded-lg'
                    />
                </div>

                <div className='
                p-5
                rounded-xl
                bg-purple-300
                text-purple-900
                flex-1
                m-1
                text-lg
                '>
                    This is my first post. Please enjoy these pictures of my son, Shiro.
                </div>

                <div className='
                p-5
                rounded-xl
                bg-purple-300
                m-1
                '>
                    <Image src='/shiro2.jpg'
                    width={200}
                    height={100}
                    className='rounded-lg'
                    />
                </div>
            </div>

            <div className='
            flex
            flex-row
            justify-between
            h-100px
            '>

                <div className='
                p-5
                rounded-xl
                bg-purple-300
                text-purple-900
                flex-1
                m-1
                text-lg
                '>
                    This is my daughter, Biriyani.
                </div>

                <div className='
                p-5
                rounded-xl
                bg-purple-300
                m-1
                '>
                    <Image src='/biriyani.jpg'
                    width={250}
                    height={100}
                    className='rounded-lg'
                    />
                </div>
            </div>

            <div className='
            flex
            flex-row
            justify-between
            h-100px
            
            '>
                <div className='
                flex
                align-center
                justify-center
                p-5
                rounded-xl
                bg-purple-300
                m-1
                object-cover
                '>
                    <Image src='/mac2.jpg'
                    width={200}
                    height={200}
                    className='rounded-lg'
                    />
                </div>

                <div className='
                p-5
                rounded-xl
                bg-purple-300
                text-purple-900
                flex-1
                m-1
                text-lg
                '>
                    This is mac. He is fat.
                </div>

                <div className='
                p-5
                rounded-xl
                bg-purple-300
                m-1
                '>
                    <Image src='/mac.jpg'
                    width={200}
                    height={200}
                    className='rounded-lg'
                    />
                </div>
            </div>
        </div>
    );
};

export default Kt;