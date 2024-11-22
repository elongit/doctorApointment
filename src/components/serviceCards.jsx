
const ServiceCards= ({data})=>{
        
    const cards = data.map((d) => (
        <div key={d.id} className="font-serif p-6 bg-white hover:shadow-lg rounded py-10 h-fit grid grid-cols-1 place-items-center shadow-inner lg:place-items-start text-center lg:text-start  transition-shadow duration-300">
            <figure>
                <img src={d.img} alt={d.Title} className="w-20 rounded" />
            </figure>
            <h1 className="text-2xl my-4 hover:text-indigo-500">{d.Title}</h1>
            <p className="text-[18px] text-gray-700">{d.desc}</p>
        </div>
    ));

    return (
        <>
         <div className="flex flex-col lg:flex-row my-10 px-4 lg:px-10 pt-6 justify-between">
        <div>
            <h1 className="text-3xl font-bold lg:text-7xl">Our Included <span className="text-primary-color">Services</span></h1>
        </div>
        <div className="w-full lg:w-1/2">
            <p className="text-xl lg:text-2xl text-gray-700 mt-6 lg:my-12">We provide comprehensive healthcare services  to improve patient satisfaction.</p>
        </div>
    </div>
    <div  className="cursor-pointer px-5 lg:px-5 grid grid-cols-1 lg:grid-cols-4 gap-4 pb-14 mt-10">
            {cards}
        </div>
        </>
       
    );

}

export default ServiceCards;