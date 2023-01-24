import {useForm} from "react-hook-form";
import {userService} from "../../services";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset} = useForm({mode: 'all'});

    const addUser = async (newUser) => {
        const userObj = {
            name: newUser.name,
            username: newUser.username,
            email: newUser.email,
            address: {street: newUser.street, suite: newUser.street, city: newUser.city, zipcode: newUser.zipcode, geo:{lat: newUser.lat, lng:newUser.lat}}

        }
        const {data} = await userService.create(userObj);
        setUsers(prev => [...prev, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(addUser)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'street'} {...register('street')}/>
            <input type="text" placeholder={'suite'} {...register('suite')}/>
            <input type="text" placeholder={'city'} {...register('city')}/>
            <input type="text" placeholder={'zipcode'} {...register('zipcode')}/>
            <input type="text" placeholder={'lat'} {...register('lat')}/>
            <input type="text" placeholder={'lng'} {...register('lng')}/>
            <button>Add user</button>
        </form>
    )
}

export {UserForm}