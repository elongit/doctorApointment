import PropTypes from 'prop-types';


const Select = ({name , id , options , selectedOption})=>{

    return(
        <select name={name} id={ id }  className="bg-slate-100 hover:border-2 hover:border-blue-600 p-3 outline-none rounded md:w-full w-fit">
            <option selected>{selectedOption}</option>
            {
                options.map((opt, i)=>
                    <option key={i}value={opt}>{opt}</option>
            )
            }
        </select>
    )
}

Select.propTypes = {
    name : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    options : PropTypes.array.isRequired,
    selectedOption : PropTypes.string.isRequired
}

export default Select
