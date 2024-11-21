
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
export default function Card({ name, specialty, imageUrl }) {
    return (
        <article className="text-[17px] h-fit shadow-md p-2">
        <figure className="rounded">
         <img src={imageUrl} alt={name} className="w-full h-64 object-cover"></img>
        </figure>
        <div className="p-2">
            <h4 className="text-xl text-secondary-color font-semibold">Dr. {name}</h4>
            <p className="text-sm">{specialty}</p>
        </div>
        <div className="flex flex-col gap-1 text-center">
        <NavLink to='/' className="bg-primary-color hover:bg-secondary-color text-white font-bold  py-2 rounded-md">
                View Profile
            </NavLink>
            <NavLink to='/' className="bg-primary-color hover:bg-secondary-color text-white font-bold  py-2 rounded-md">
                Book an appointment
            </NavLink>
        </div>
    </article>

    );
}

Card.propTypes = {
    name : PropTypes.string.isRequired,
    specialty : PropTypes.string.isRequired,
    imageUrl : PropTypes.string.isRequired
}