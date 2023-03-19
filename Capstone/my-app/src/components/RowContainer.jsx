import React from "react"

const RowContainer = ({flag}) => {
    return <div className={'w-full my-12 bg-black ${flag ? 'overflow-x-hidden' : '}></div>;
};

export default RowContainer;

