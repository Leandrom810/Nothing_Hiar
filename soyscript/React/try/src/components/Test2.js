import PropTypes from 'prop-types'

function Test2({message, name, id}){
    return(
        <>
            <p>{message} {name}. Your ID: {id}</p>
        </>
    );
}

Test2.propTypes={
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

Test2.defaul={
    message: "message.",
    name: "name",
    id: 0
}

export default Test2;