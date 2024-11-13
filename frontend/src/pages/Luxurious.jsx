import React, { useState } from "react";
import { assets } from "../assets/assets";

const Luxurious = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Fix state initialization

  const items = [
    {
      id: 1,
      label: "Rolls-Royace",
      heading: "Rolls-Roayce",
      description:
        "**Rolls-Royce** is a British luxury automobile manufacturer known for producing ultra-premium cars that epitomize elegance, craftsmanship, and performance. Founded in 1904 by Charles Rolls and Henry Royce, the brand has become synonymous with luxury, sophistication, and unparalleled attention to detail. Rolls-Royce cars are often regarded as the pinnacle of automotive excellence, offering a blend of classic design with modern technology.Signature models like the **Rolls-Royce Phantom**, **Ghost**, **Wraith**, and **Cullinan** SUV feature powerful V12 engines, impeccable interior craftsmanship, and a smooth, quiet ride that offers the utmost comfort. The interiors are hand-crafted with the finest materials, such as leather, wood veneers, and bespoke finishes, while the exterior showcases timeless, graceful lines. Rolls-Royce is also known for offering extensive bespoke customization options, allowing customers to personalize every detail of their vehicle. The brand’s slogan, **“The Best or Nothing,”** reflects its commitment to producing only the highest quality cars, making Rolls-Royce a symbol of ultimate luxury and exclusivity.",
      imgsrc: assets.rolls,
    },
    {
      id: 2,
      label: "Mercedes-Bnez",
      heading: "Mercedes-Benz",
      description:
        "Mercedes-Benz is a renowned German automobile manufacturer known for producing luxury vehicles, buses, and trucks. Founded in 1926, the company is celebrated for its commitment to innovation, engineering excellence, and performance. Mercedes-Benz cars are often seen as symbols of elegance and quality, combining high-end technology with stylish, sophisticated designs.Key models such as the Mercedes-Benz S-Class, E-Class, and GLS-Class, offer premium comfort and cutting-edge features, often leading the industry in areas like safety technology, hybrid, and electric advancements. The brands slogan, The Best or Nothing, encapsulates its pursuit of perfection in every vehicle, whether its a high-performance AMG model or a luxurious sedan. Mercedes-Benz has become an iconic name in automotive history, revered worldwide for its quality and luxurious appeal",
      imgsrc: assets.carmercedes,
    },
    {
      id: 3,
      label: "Bentley",
      heading: "Bentley",
      description:
        "Bentley Motors is a prestigious British automotive manufacturer famed for its high-performance luxury vehicles that blend traditional craftsmanship with modern innovation. Founded in 1919 by W.O. Bentley, the brand initially gained fame for its engineering prowess, achieving significant success in motor racing, including multiple wins at the 24 Hours of Le Mans in the 1920s. Bentley’s cars are designed with meticulous attention to detail, using premium materials such as hand-stitched leather, rare wood veneers, and polished metal trims.Signature models like the Bentley Continental GT, Bentley Flying Spur, and Bentley Bentayga SUV showcase the brand's commitment to power, elegance, and comfort, often featuring powerful twin-turbocharged engines and advanced technology. Bentley epitomizes British luxury and exclusivity, catering to clients seeking refined performance and bespoke customization options. The brand’s slogan, “Be Extraordinary,” reflects its mission to create vehicles that deliver a superior, luxurious experience on and off the road.",
      imgsrc: assets.bantley,
    },

    {
      id: 4,
      label: "Lamborgini",
      heading: "Lamborgini",
      description:
        "Lamborghini is an Italian luxury sports car manufacturer known for its aggressive design, high performance, and distinctively bold style. Founded in 1963 by Ferruccio Lamborghini, the brand was created to challenge Ferrari and quickly became an icon in the world of exotic cars. Lamborghini’s vehicles are instantly recognizable for their sharp, angular designs and low, aerodynamic profiles, embodying speed and exclusivity. Models like the Lamborghini Aventador, Huracán, and Urus SUV feature powerful V10 and V12 engines, cutting-edge technology, and a distinctive roar that resonates with car enthusiasts. Lamborghini’s advanced engineering delivers thrilling acceleration and top speeds, while its interior craftsmanship offers a unique blend of luxury and futuristic aesthetics. The brand’s slogan, “Expect the Unexpected,” highlights Lamborghini’s commitment to pushing the boundaries of automotive design and performance, creating supercars that are as visually stunning as they are exhilarating to drive.",
      imgsrc: assets.lamborgini,
    },
    {
      id: 1,
      label: "Maserati",
      heading: "Maserati",
      description:
        "Maserati is a prestigious Italian luxury car brand celebrated for its blend of elegant design, high performance, and Italian craftsmanship. Established in 1914 by the Maserati brothers, the brand originally focused on building race cars and achieved significant success on the track. Maserati’s logo, the iconic trident, symbolizes power and prestige, while its vehicles offer a unique balance of sportiness and luxury. Signature models like the Maserati Quattroporte sedan, the Ghibli sports sedan, and the Levante SUV combine powerful engines—often featuring the brand’s distinct, throaty exhaust note—with refined interiors, handcrafted using premium leather and materials. Maserati cars are known for their sleek, flowing designs and unmistakable Italian style, which make them stand out in the luxury market. The brand’s slogan, “The Absolute Opposite of Ordinary,” captures its commitment to exclusivity and unique driving experiences, making Maserati a symbol of elegance and performance on the road.",
      imgsrc: assets.mersati,
    },
    {
      id: 1,
      label: "Ferrari",
      heading: "Ferrari",
      description:
        "Ferrari is an iconic Italian luxury sports car manufacturer renowned for its high-performance vehicles, cutting-edge technology, and timeless design. Founded in 1939 by Enzo Ferrari, the brand has a rich racing heritage and is synonymous with Formula 1 success, winning numerous world championships. Ferrari cars are celebrated for their powerful V8 and V12 engines, meticulously engineered to deliver thrilling speed and precision handling. Ferrari’s signature models, like the Ferrari 488, F8 Tributo, and the hybrid SF90 Stradale, embody its commitment to excellence, featuring striking aerodynamic designs and a signature red color, known as “Rosso Corsa.” Ferrari’s interiors are crafted with luxury and functionality in mind, using premium materials that provide comfort even at high speeds. The brand’s slogan, “Essere Ferrari” or “To Be Ferrari,” captures the passion, exclusivity, and prestige associated with driving one of its vehicles. Each Ferrari is a masterpiece of engineering and artistry, designed to offer an unmatched experience on both the road and the track.",
      imgsrc: assets.ferrari,
    },
    {
      id: 1,
      label: "Cadillac",
      heading: "Cadillac",
      description:
        "Cadillac is an iconic American luxury automobile brand known for its bold design, advanced technology, and commitment to luxury and performance. Founded in 1902, Cadillac quickly became a symbol of American sophistication, introducing industry-first innovations like electric starters and V8 engines. Often associated with style, power, and elegance, Cadillac’s vehicles have long been favorites among those seeking comfort and high-end features. Notable models like the Cadillac Escalade SUV, CT6 sedan, and Lyriq EV exemplify Cadillac’s dedication to blending powerful performance with cutting-edge technology. Cadillac’s design philosophy, characterized by its angular lines and striking presence, sets it apart in the luxury market. The brand’s interiors are spacious and finely crafted, using high-quality materials and offering advanced infotainment and safety systems. Cadillac’s slogan, “Dare Greatly,” reflects its commitment to pushing boundaries and delivering a luxurious, exhilarating driving experience that embodies American prestige and ambition.",
      imgsrc: assets.cadillac,
    },
    {
      id: 1,
      label: "Range-Rover",
      heading: "Range-Rover",
      description:
        "Range Rover, produced by the British automaker Land Rover, is synonymous with luxury SUVs that combine rugged off-road capability with refined elegance. Introduced in 1970, Range Rover quickly became a symbol of sophistication, recognized for its ability to transition seamlessly from challenging terrains to city streets. Known for exceptional design, comfort, and advanced technology, Range Rover vehicles embody the ideal of an all-purpose luxury vehicle.Key models like the Range Rover, Range Rover Sport, and Range Rover Velar offer powerful engines, a plush interior, and cutting-edge features such as adaptive suspension and terrain response systems. Inside, Range Rovers are outfitted with premium materials like leather, wood, and metal finishes, offering both spaciousness and high-end comfort. Equipped with the latest infotainment and driver assistance technology, Range Rovers are designed for both adventure and elegance. Their slogan, “Above and Beyond,” captures the brand’s commitment to high performance, luxury, and capability, making it a favorite among luxury SUV enthusiasts worldwide.",
      imgsrc: assets.rover,
    },
    {
      id: 1,
      label: "BMW",
      heading: "BMW",
      description:
        "BMW (Bayerische Motoren Werke AG) is a German luxury automobile and motorcycle manufacturer known for its precision engineering, dynamic performance, and sleek design. Founded in 1916, BMW has built a reputation for producing premium vehicles that combine innovative technology with sporty handling, catering to driving enthusiasts and luxury seekers alike. The brand’s slogan, **“The Ultimate Driving Machine,”** reflects its commitment to providing an exhilarating and refined driving experience. Key BMW models include the **3 Series** and **5 Series** sedans, the sporty **M Series**, and the versatile **X Series** SUVs. BMW is also at the forefront of electric mobility with its **i Series** (like the i4 and iX), which brings advanced electric performance to the luxury market. BMW’s cars are known for their responsive steering, powerful engines, and driver-centric interiors, featuring high-quality materials and cutting-edge infotainment systems. Each BMW combines performance with luxury, maintaining a balance between innovation and driving pleasure that has made it a global icon in the automotive world.",
      imgsrc: assets.carbmw,
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active index
  };

  return (
    <div>
      <div className="flex items-center justify-between mt-20 mx-20">
        <h1 className="text-4xl font-semibold">
          Get All Luxurious Brands Cars
        </h1>
        <button className="border border-black rounded-none px-8 py-2 text-red-700 hover:bg-red-700 hover:text-white transition duration-300 ease-in-out">
          View All
        </button>
      </div>

      <div className="border flex mx-20 min-h-screen mt-10 bg-black text-white rounded-3xl p-10">
        {/* Left Sidebar */}
        <div className="w-1/4 pr-6 border-r border-gray-700">
          <div className="flex flex-col space-y-4">
            {items.map((item, index) => {
              return (
                <button
                  className="border border-red-800 px-4 py-2 hover:text-white hover:bg-red-800 transition duration-300 ease-in-out"
                  key={item.id}
                  onClick={() => handleClick(index)}
                >
                  {activeIndex === index ? item.label : item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-3/4 pl-10">
          <div className="space-y-4">
            {activeIndex !== null && (
              <div className="space-y-5">
                <img
                  src={items[activeIndex].imgsrc}
                  alt="luxurious car"
                  className="w-full h-80 object-cover"
                />
                <h1 className="text-4xl">{items[activeIndex].heading}</h1>
                <p className="text-lg overflow-y-auto max-h-32">
                  {items[activeIndex].description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxurious;
