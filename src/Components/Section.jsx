import Temperatura from '../assets/Img/depositphotos_86817060-stock-illustration-hot-and-cold-symbol.png';
import velocidadViento from '../assets/Img/png-transparent-wind-logo-wind-speed-wind-turbine-symbol-windmill-renewable-energy-number (1).png';
import Humedad from '../assets/Img/4005831.png';

import Gaviota from '../assets/Img/gaviota.jpeg';
import Paloma from '../assets/Img/paloma.jpg';
import Tordo from '../assets/Img/tordo.jpg';

export default function Section() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-center text-center p-4 md:p-8 gap-4 md:gap-8 mt-16">
      {/* Primer Section */}
      <div className="p-4 bg-white shadow-2xl rounded-lg mb-4 mt-4 md:mb-8 md:mt-8 shadow-indigo-900/50">
        <main className="py-4 md:py-8">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row text-center text-black">
              <div className="max-w-sm rounded-lg overflow-hidden mx-auto mb-4 sm:mb-0">
                <img
                  className="h-10 w-auto mx-auto mt-4"
                  src={Temperatura}
                  alt="Temperatura"
                />
                <div className="px-4 py-4">
                  <div className="font-bold text-base mb-2">Temperatura</div>
                  <p className="text-gray-700 text-base sm:text-base md:text-base lg:text-base">
                    Cargando....
                  </p>
                </div>
              </div>

              <div className="max-w-sm rounded-lg overflow-hidden mx-auto mb-4 sm:mb-0">
                <img
                  className="h-10 w-auto mx-auto mt-4 "
                  src={velocidadViento}
                  alt="Velocidad del viento"
                />
                <div className="px-4 py-4">
                  <div className="font-bold text-lg mb-2">
                    viento
                  </div>
                  <p className="text-gray-700 text-base sm:text-base md:text-base lg:text-base">
                    Cargando....
                  </p>
                </div>
              </div>

              <div className="max-w-sm rounded-lg overflow-hidden mx-auto">
                <img
                  className="h-10 w-auto mx-auto mt-4"
                  src={Humedad}
                  alt="Humedad"
                />
                <div className="px-4 py-4">
                  <div className="font-bold text-base mb-2">Humedad</div>
                  <p className="text-gray-700 text-base sm:text-base md:text-base lg:text-base">
                    Cargando....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Second Section */}
      <div className="p-4  shadow-2xl rounded-lg mb-4 mt-4 md:mb-8 md:mt-8 shadow-indigo-900/50 bg-white" >
        <main className="py-4 md:py-8">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row text-center text-black">

              <div className="max-w-sm rounded-lg overflow-hidden mx-auto mb-4 sm:mb-0">
                <img
                  className="h-16 w-auto mx-auto mt-4 rounded-lg "
                  src={Paloma}
                  alt="Palomas"
                />
                <div className="px-4 py-4">
                  <div className="font-bold text-lg mb-2">Palomas</div>
                  <p className="text-gray-700 text-base sm:text-base md:text-base lg:text-base">
                    Cargando....
                  </p>
                </div>
              </div>

              <div className="max-w-sm rounded-lg overflow-hidden mx-auto mb-4 sm:mb-0">
                <img
                  className="h-16 w-auto mx-auto mt-4 rounded-lg"
                  src={Gaviota}
                  alt="Gaviotas"
                />
                <div className="px-4 py-4">
                  <div className="font-bold text-lg mb-2">Gaviotas</div>
                  <p className="text-gray-700 text-base sm:text-base md:text-base lg:text-base">
                    Cargando....
                  </p>
                </div>
              </div>

              <div className="max-w-sm rounded-lg overflow-hidden mx-auto">
                <img
                  className="h-16 w-auto mx-auto mt-4 rounded-lg"
                  src={Tordo}
                  alt="Tordos"
                />
                <div className="px-4 py-4">
                  <div className="font-bold text-lg mb-2">Tordos</div>
                  <p className="text-gray-700 text-base sm:text-base md:text-base lg:text-base">
                    Cargando....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
