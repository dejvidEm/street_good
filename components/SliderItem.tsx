import React from 'react'

type SliderItemProps = {
    children: React.ReactNode;
    imageSrc: string;
    icon: React.ReactNode;
    icon2: React.ReactNode;
    icon3: React.ReactNode;
    iconName: string;
    iconName2: string;
    iconName3: string;
  }

export default function SliderItem({children, imageSrc, icon, icon2, icon3, iconName, iconName2, iconName3}: SliderItemProps) {
  return (
    <div className="text-center">
          <img src={imageSrc} alt="bowl" className="opacity-90"/>
          <h2 className="bowl-nadpis font-bold text-md sm:text-xl text-gray-950">{children}</h2>
        </div>
  )
}
