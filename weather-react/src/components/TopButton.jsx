import React from 'react'

export const TopButton = () => {
    const cities = [
        {
            id:1,
            title:"Toshkent"
        },
        {
            id:2,
            title:"Sydney"
        },
        {
            id:3,
            title:"Tokyo"
        },
        {
            id:4,
            title:"London"
        },
        {
            id:5,
            title:"Paris"
        },
    ]
  return <div className="flex items-center justify-around my-6">
  {cities.map((city)=>(
      <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
  ))}
</div>
}
