import React from 'react'


import dynamic from "next/dynamic";

const DraggableBox = dynamic(() => import("@/components/DraggableBox"), {
  ssr: false,
});
const CityVideo = () => {
  return (
    <>

      <DraggableBox />

    </>
  )
}

export default CityVideo