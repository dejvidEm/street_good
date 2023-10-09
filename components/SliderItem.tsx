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
          <div className="vlastnosti flex flex-row justify-center pt-2 sm:pt-5 mb-10 sm:mb-20 sm:gap-20 gap-8 sm:text-base text-xs">
            <div className="flex flex-col items-center gap-2">
              <p>{iconName}</p>
              {icon}
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>{iconName2}</p>
              {icon2}
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>{iconName3}</p>
              {icon3}
            </div>
          </div>
        </div>
  )
}
