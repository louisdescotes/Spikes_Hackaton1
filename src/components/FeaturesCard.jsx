import React from 'react'

export default function FeaturesCard({img, title, p}) {
  return (
    <div className='flex flex-col gap-[15px]'>
        <img src={`/public/${img}`} alt="" className='w-fit object-cover'/>
        <div className="flex flex-col gap-[10px]">
        <p className="text-sm dm-bold">{title}</p>
        <p className="text-xs text-[#626262] dm-medium w-9/12">{p}</p>
        </div>
    </div>
  )
}
