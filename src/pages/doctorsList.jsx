
import Card from "../components/card";
import Select from "../components/select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const DoctorList = () => {
    // doctors specialites
    const options = ['Cardiology', 'Dermatology', 'Neurology', 'Pediatrics', 'Psychiatry', 'Orthopedics', 'General Practice'];
    const cities = [
        "Rabat", "Casablanca", "Marrakech", "Fes", "Meknes", "Tangier", "Kenitra", "El Jadida", "Beni Mellal", "Khouribga",
        "Settat", "Agadir", "Oujda", "Safi", "Nador", "Taza", "Taroudant", "Errachidia", "Al Hoceima", "Dakhla", "Laayoune",
        "Azilal", "Ifrane", "Ksar el-Kebir", "Tétouan", "M'diq", "Berkane", "Ben Guerir", "Erfoud", "Figuig", "Imintanoute",
        "Jorf El Mellah", "Khemisset", "Midelt", "Ouarzazate", "Ouezzane", "Rissani", "Sidi Ifni", "Tafraoute", "Zagora", 
        "Driouch", "Skhirat", "Moulay Idriss", "Sidi Kacem", "Taliouine", "Tighza", "Tizguine", "Touissit", "Skoura"
    ];

    const gender = ['male', 'female'];

    // docotrs data
    const doctors = [
        { name: "Oussama Douwabi", specialty: "Cardiology", imageUrl: "https://static.vecteezy.com/ti/photos-gratuite/t1/28287555-un-indien-jeune-femelle-medecin-isole-sur-vert-ai-genere-photo.jpg" },
        { name: "Fatima Zahra", specialty: "Dermatology", imageUrl: "https://img.freepik.com/photos-gratuite/heureux-jeune-femme-medecin-portant-robe-medicale-stethoscope-autour-du-cou-debout-posture-fermee_409827-254.jpg"  },
        { name: "Ahmed Benali", specialty: "Neurology", imageUrl: "https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655320_640.png" },
        { name: "Meriem El Amrani", specialty: "Pediatrics", imageUrl: "https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg" },
        { name: "Mohamed El Fassi", specialty: "Orthopedics", imageUrl: "https://static.vecteezy.com/ti/photos-gratuite/t1/28287555-un-indien-jeune-femelle-medecin-isole-sur-vert-ai-genere-photo.jpg" },
        { name: "Amina Rami", specialty: "Psychiatry", imageUrl: "https://static.vecteezy.com/ti/photos-gratuite/t1/28287555-un-indien-jeune-femelle-medecin-isole-sur-vert-ai-genere-photo.jpg" },
    ];
    const lang = ['Arabic' , 'French' , 'English' , 'Amazigh'];

    return (
        <>
        <div className="flex flex-col-reverse md:flex-row-reverse">
            {/* Main doctor cards section */}
            <section className="p-7 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-5 w-full lg:w-2/3 ">
                {doctors.map((doctor, index) => (
                    <Card
                        key={index}
                        name={doctor.name}
                        specialty={doctor.specialty}
                        imageUrl={doctor.imageUrl}
                    />
                ))}
            </section>

            {/* Sticky form section */}
            <aside className="p-5 w-full lg:w-1/3 cursor-pointer">
               <fieldset className="sticky top-5 z-10 border-4 shadow border-primary-color py-0 md:py-2 rounded">
                <legend className="text-xl md:text-3xl font-bold text-primary-color">
                    <FontAwesomeIcon icon={faFilter} />

                </legend>
                <form action="" className="flex md:flex-col overflow-x-scroll md:overflow-auto p-3 gap-5 w-[360px] md:w-full bg-white">
                    <input 
                        type="search" 
                        placeholder="Doctor name" 
                        className="p-3 bg-sky-50 border-none rounded " 
                        aria-label="Search for doctor"
                    />
                    {/* specialty */}
                    <Select name="specialty" id="specialty" selectedOption="Select a specialty" value="" options={options} />
                    {/* cities */}
                    <Select name="cities" id="cities" selectedOption="Select a city" value="" options={cities} />
                    {/* gender */}
                    <Select name="gender" id="gender" selectedOption="Select a gender" value="" options={gender} />
                    {/* spoken language */}
                    <Select name="lang" id="lang" selectedOption="spoken language" value="" options={lang} />
                    <button type="submit" className="bg-primary-color hover:bg-secondary-color text-white font-bold text-xl rounded-md py-2">Login</button>

                </form>
               </fieldset>
            </aside>
        </div>
        </>
    );
};

export default DoctorList;
