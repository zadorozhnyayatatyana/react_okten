const User = ({user}) => {

    const {id, name, username, email, address} = user;
    const {street, suite, city, zipcode, geo} = address;
    const {lat, lng} = geo;

    return (
        <div>
            <div> id: {id} </div>
            <div> name: {name} </div>
            <div> username: {username} </div>
            <div> email: {email} </div>
            <b>address:</b>
            <div> street: {street} </div>
            <div> suite: {suite} </div>
            <div> city: {city} </div>
            <div> zipcode: {zipcode} </div>
            <b>geo:</b>
            <div> lat: {lat} </div>
            <div> lng: {lng} </div>
        </div>
    )
}

export {User}