import React from 'react';

const New = () => {
    return (
        <>
        <div className="text-center  flex flex-col items-center bg-[#222e61] justify-center object-top  w-full h-screen ">
            <h1 className="text-center text-3xl absolute top-10 ">New Page</h1>
            <div className=" top-0 max-w-fit  my-10 absolute top-40">
                <p className='text-center'>This is a new page which can be accessed via the Click Me! button in the index page.
                </p>
                <footer className="position-fixed-bottom-0 mt-10 text-end " >--Made by Yash Bharuntia</footer>
            </div>
        </div>
        </>
    );
};

export default New;