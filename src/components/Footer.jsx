import React from 'react';

function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-3 gap-12">

          <div className="info">
            <h1 className="text-red-500 font-bold text-2xl mb-4">VikasCarShop</h1>
            <p className="text-sm leading-relaxed">
              VikasCarShop is the most trusted way of buying and selling used cars. Choose from over 5000 fully inspected second-hand car models. Select online and book a test drive at your home or at a VikasCarShop Car Hub near you. Get a no-questions-asked 5-day money-back guarantee and a free one-year comprehensive service warranty with Assured Resale Value on every Spinny car.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/?size=48&id=118497&format=png" alt="" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/?size=48&id=ClbD5JTFM7FA&format=png" alt="" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/?size=50&id=32292&format=png" alt="" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/?size=48&id=114445&format=png" alt="" />
              </a>
            </div>
            <div className="text-center text-xs mt-8  border-t border-gray-600 pt-4">
          © 2024 Private Limited. All rights reserved.
        </div>
          </div>

          <div className="about">
            <h2 className="text-white text-xl font-bold mb-4">ABOUT</h2>
            <ul className="space-y-2 text-sm">
              <li>Assured</li>
              <li>Who we are</li>
              <li>Blog - Yellow Drive</li>
              <li>FAQ's</li>
              <li>How It Works</li>
              <li>Customer Reviews</li>
              <li>Used Car Loan</li>
              <li>Partners</li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <button className="bg-red-600 w-full px-4 py-2 text-sm  text-white">
                +91 7483292903
              </button>
              <button className=" text-white px-4 py-2 text-sm w-full border border-black-600 font-bold">
                Get Instant Quote
              </button>
              <button className=" text-white px-4 py-2 text-sm w-full border border-black-600 font-bold">
                Browse Cars
              </button>
            </div>
          </div>

          <div className="buy-cars">
            <h2 className="text-white text-xl font-bold mb-4">BUY USED CAR IN</h2>
            <ul className="space-y-2 text-sm">
              <li>Delhi NCR | Bangalore | Hyderabad | Mumbai | Pune |</li>
              <li>Chennai | Kolkata | Lucknow | Jaipur | Chandigarh |</li>
              <li>Coimbatore | Faridabad | Ghaziabad | Indore | Kochi |</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
