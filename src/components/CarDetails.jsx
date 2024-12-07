import React, { useState, useEffect } from 'react'
import ImageView360 from 'react-360-view'


const cars = [
  {
    id: 1,
    model: "2021 Mahindra Thar LX 4 STR Hard Top Diesel MT 4WD",
    year: "2021",
    mileage: "13K km",
    price: "₹13.26 Lakh",
    transmission: "Manual",
    fuelType: "Diesel",
    location: "VikasCarShop, Pune",
    images: [
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/41a8a8b2a63b414d81c687c80d30ede2/file.JPG?q=85",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/41a8a8b2a63b414d81c687c80d30ede2/file.JPG?q=85&w=900&dpr=1.3",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/953c9ed5b8e24caea1816de9beb6f53d/file.JPG?q=85&w=320",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/3bad01e406f9439684e5672e5c5bfdfd/file.JPG?q=85&w=900",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/8d7b4bc2fdcf4188a934178e9d8cd167/file.JPG?q=85&w=900&dpr=1.3",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/6eee2a4ff0cf411eac08bc7560dc8e08/file.JPG?q=85&w=900&dpr=1.3",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/9ad12e88626f4b2ab24ea83e5fa302a0/file.JPG?q=85&w=900&dpr=1.3",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/a2d9912c99894eb2b8bfa30406647b4d/file.JPG?q=85&w=900&dpr=1.3",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/af0aae5931d34af28f94b0b747d65d12/file.JPG?q=85&w=900&dpr=1.3",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/3c327ee07b9641339a896707e6d25e51/file.JPG?q=85&w=900&dpr=1.3"
    ],
    view360Images: Array.from({ length: 36 }, (_, i) => `/placeholder.svg?height=400&width=600&text=360°%20View%20${i + 1}`)
  }
]

const similarCars = [
  {
    id: 2,
    model: "2021 Mahindra Thar LX 4 STR Hard Top Petrol AT 4WD",
    year: "2021",
    mileage: "15K km",
    price: "₹13.50 Lakh",
    transmission: "Manual",
    fuelType: "Diesel",
    location: "VikasCarShop, Mumbai",
    image: "https://mda.spinny.com/sp-file-system/public/2024-10-13/50b5da90307c46da84933ee178c61f9f/file.JPG?q=85&w=360"
  },
  {
    id: 3,
    model: "2020 Mahindra Thar LX 4 STR Hard Top Diesel MT 4WD",
    year: "2020",
    mileage: "20K km",
    price: "₹12.75 Lakh",
    transmission: "Manual",
    fuelType: "Diesel",
    location: "VikasCarShop, Delhi",
    image: "https://mda.spinny.com/sp-file-system/public/2024-11-29/a970cd21cac942218324120578984355/file.JPG?q=85&w=360"
  },
  {
    id: 4,
    model: "2022 Mahindra Scorpio S9",
    year: "2022",
    mileage: "8K km",
    price: "₹14.50 Lakh",
    transmission: "Automatic",
    fuelType: "Diesel",
    location: "VikasCarShop, Bangalore",
    image: "https://mda.spinny.com/sp-file-system/public/2024-04-16/a348d9f2240f427eab585b49ab1a033f/file.JPG?q=85&w=360"
  },
  {
    id: 5,
    model: "2021 Hyundai Alcazar Platinum 7 STR 1.5 Diesel MT",
    year: "2021",
    mileage: "12K km",
    price: "₹12.90 Lakh",
    transmission: "Manual",
    fuelType: "Petrol",
    location: "VikasCarShop, Chennai",
    image: "https://mda.spinny.com/sp-file-system/public/2024-06-01/bcf0444fa76e433696bc8967c33adb31/file.JPG?q=85&w=900&dpr=1.3"
  }
]

export default function CarDetails() {
  const [currentCarIndex, setCurrentCarIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [invites, setInvites] = useState(50)
  const [duration, setDuration] = useState(4)
  const [calculatedPrice, setCalculatedPrice] = useState(0)
  const [is360View, setIs360View] = useState(false)
 
  
  const currentCar = cars[currentCarIndex]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentCar.images.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + currentCar.images.length) % currentCar.images.length)
  }

  useEffect(() => {
    setCalculatedPrice(invites * duration * 100)
  }, [invites, duration])

  const toggle360View = () => {
    setIs360View(!is360View)
  }

  return (
    <div className="container mx-auto p-4 mt-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="mb-8">
            <div className="relative">
              {is360View ? (
                <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
                  <ImageView360
                    amount={36}
                    imagePath="/placeholder.svg"
                    fileName="height=400&width=600&text=360°%20View%20{index}"
                    spinReverse
                    autoplay
                    loop
                  />
                </div>
              ) : (
                <img
                  src={currentCar.images[currentImageIndex]}
                  alt={currentCar.model}
                  className="w-full h-96 object-cover rounded-lg"
                />
              )}
              {!is360View && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {currentCar.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumbnail-${index}`}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 object-cover cursor-pointer rounded ${
                    currentImageIndex === index ? 'ring-2 ring-purple-600' : ''
                  }`}
                />
              ))}
            </div>
            <button
              onClick={toggle360View}
              className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              {is360View ? 'Exit 360° View' : 'View 360°'}
            </button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Car Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-gray-500">Model</h3>
                <p className="font-semibold">{currentCar.model}</p>
              </div>
              <div>
                <h3 className="text-gray-500">Year</h3>
                <p className="font-semibold">{currentCar.year}</p>
              </div>
              <div>
                <h3 className="text-gray-500">Mileage</h3>
                <p className="font-semibold">{currentCar.mileage}</p>
              </div>
              <div>
                <h3 className="text-gray-500">Price</h3>
                <p className="font-semibold text-purple-600">{currentCar.price}</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Price Calculator</h2>
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Number of Invites</span>
                  <span className="text-purple-600">{invites}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={100}
                  value={invites}
                  onChange={(e) => setInvites(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-1 text-sm text-gray-500">
                  <span>1</span>
                  <span>100</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Duration of Event (hours)</span>
                  <span className="text-purple-600">{duration}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={24}
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between mt-1 text-sm text-gray-500">
                  <span>1 hour</span>
                  <span>24 hours</span>
                </div>
              </div>
              <div className="pt-6 border-t">
                <div className="text-3xl text-blue-600 font-semibold">
                  ₹{calculatedPrice.toLocaleString()}
                  <span className="text-sm text-gray-500 ml-2">total price</span>
                </div>
              </div>
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-white shadow-md rounded-lg p-6 sticky top-4">
            <h1 className="text-2xl font-bold mb-2">{currentCar.model}</h1>
            <p className="text-gray-600 mb-4">{currentCar.mileage} • {currentCar.fuelType} • {currentCar.transmission}</p>
            <div className="flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{currentCar.location}</span>
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-6">{currentCar.price}</div>
            <p className="text-sm text-gray-500 mb-6">Fixed on road price</p>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300 mb-4">
              View Similar Cars
            </button>
            <div className="mt-6 flex items-center gap-4">
              <span>Share with a friend:</span>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="mailto:?subject=Check%20out%20this%20car&body=I%20found%20this%20amazing%20car%20on%20our%20website!" className="text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Similar Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarCars.map((car) => (
            <div key={car.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={car.image} alt={car.model} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{car.model}</h3>
                <p className="text-gray-600 text-sm mb-2">{car.year} • {car.mileage}</p>
                <p className="text-purple-600 font-semibold mb-2">{car.price}</p>
                <p className="text-gray-500 text-sm">{car.transmission} • {car.fuelType}</p>
                <p className="text-gray-500 text-sm mt-2">{car.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

