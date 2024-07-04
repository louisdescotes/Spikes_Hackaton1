import React from 'react'
import CardOne from '../components/Cards/CardOne'
import CardTwo from '../components/Cards/CardTwo'
import CardThree from '../components/Cards/CardThree'

export default function Cards() {
  return (
    <section className="relative w-full h-10/12 flex justify-center mb-20">
      <div className="absolute -top-[30px] bg-[#FFFFFF33] rounded-3xl h-full w-[85%]"></div>
      <div className="absolute -top-[20px] bg-[#FFFFFF80] rounded-3xl h-full w-[90%]"></div>
      <div className="absolute -top-[10px] bg-[#FFFFFFCC] rounded-3xl h-full w-[95%]"></div>
      <aside className="relative flex gap-10 overflow-hidden bg-card-gradient w-full h-72 rounded-3xl px-8 py-12">
        <CardOne />
        <CardTwo />
        <CardThree />
      </aside>
      
    </section>
  )
}
