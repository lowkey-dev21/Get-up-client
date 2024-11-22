import { useState, useEffect } from 'react'

interface Item {
  plan: string
  title: string
  data: string
  color: string
  textColor: string
  version?: string
}

const ClassicPlanSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true) // State for fade animation

  const items: Item[] = [
    {
      plan: '7x4 PLAN',
      title: 'MASSIVE UPPER BODY',
      data: 'Lose belly fat, get ripped abs in just 4 weeks with this efficient plan. It also helps pump up your arms, strengthen your back & shoulders.',
      color: 'bg-blue-500',
      textColor: 'text-blue-500',
    },
    {
      plan: '30 Days Plan . 3 Levels',
      title: 'GET RIPPED WITH DUMBBELL',
      data: 'With just a pair of dumbbells, this 30-day workout plan works all your muscles, helps you get bigger and stronger muscles, and e...',
      color: 'bg-cyan-500',
      textColor: 'text-cyan-500',
      version: 'PRO',
    },
    {
      plan: '30 Days Plan',
      title: 'BELLY FAT SHREDDER',
      data: 'Boost metabolism with intense cardio workouts. With essential fat-burning exercises on abs, you can get rid of stubbor...',
      color: 'bg-red-500',
      textColor: 'text-red-500',
      version:"PRO"
    },
    {
      plan: '60 Days Plan',
      title: 'ULTIMATE WEIGHT LOSS',
      data: ' Full-body weight loss routine combined with belly-focused training. The simple and effective 60-day weight loss program prove...',
      color: 'bg-teal-700',
      textColor: 'text-teal-700',
      version:"PRO"
    },
    {
      plan: '30 Days Plan . 3 Plans',
      title: 'LOSE WEIGHT FOR MEN',
      data: ' Eliminate man boobs and love handles in the most efficient way with just 5-10 min a day.The best weight loss routine for men proven...',
      color: 'bg-slate-700',
      textColor: 'text-slate-700',
      version:"PRO"
    },
  ]

 
  useEffect(() => {
    // Set initial item to the first
    setCurrentIndex(0)
  }, [])

  const handleNext = () => {
    setFade(false) // Start fade-out animation
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % items.length
      setCurrentIndex(nextIndex)
      setFade(true) // Fade-in animation
    }, 300)
  }

  const handleBack = () => {
    setFade(false) // Start fade-out animation
    setTimeout(() => {
      const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1
      setCurrentIndex(prevIndex)
      setFade(true) // Fade-in animation
    }, 300)
  }

  return (
    <section className="mt-3 w-full">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-5">
        <h1 className="font-semibold text-[18px]">Classic Plan</h1>
        <div className="text-black text-[18px] cursor-pointer">See All</div>
      </nav>

      <nav className=" flex w-full items-center px-3 mb-[-10px] mt-3 text-2xl  justify-between">
        <span >&lt; &lt;</span>
        <span className=' animate-pulse'>&gt; &gt;</span>
      </nav>

      {/* Slider Section */}
      <section className="flex absolute w-full left-0 right-0 flex-col items-center gap-5 p-5">
        {/* Mobile Version */}
        <div className="lg:hidden flex flex-col items-center gap-3 w-full">
          <div
            className={`h-[350px] w-[95%] ${
              items[currentIndex]?.color
            } rounded-lg flex flex-col items-center justify-center transition-all duration-300 ${
              fade ? 'opacity-100' : 'opacity-0'
            } relative`}
          >
            {/* Back Button */}
            <div
              className="absolute z-[10] left-0 w-[15%] text-xl h-full bg-transparent flex items-center justify-center cursor-pointer"
              onClick={handleBack}
            ></div>

            {/* Centered Content */}
            <div className="text-white z-[] justify-between h-full py-[2rem]  flex flex-col p-4">
              <h2 className="text-lg  ">{items[currentIndex]?.plan}</h2>
              <h3 className="text-[200%]  spa font-bold">
                {items[currentIndex]?.title}
              </h3>

              {items[currentIndex]?.version && (
                <p className=" bg-white text-xl font-bold p-2 rounded-md text-black w-[60px] ">
                  {items[currentIndex]?.version}
                </p>
              )}

              <p className="mt-3  text-justify  text-[14.5px]">
                {items[currentIndex]?.data}
              </p>
            </div>

            {/* Next Button */}
            <div
              className="absolute right-0 z-[10] w-[15%] text-xl h-full bg-transparent flex items-center justify-center cursor-pointer"
              onClick={handleNext}
            ></div>
          </div>
          <button
            className={` w-[95%] bg-white text-2xl font-medium p-3 rounded-lg  ${items[currentIndex]?.textColor} `}
          >
            Start
          </button>
        </div>
      </section>
    </section>
  )
}

export default ClassicPlanSlider
