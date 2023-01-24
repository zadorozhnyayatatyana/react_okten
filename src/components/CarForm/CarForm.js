import {useForm} from "react-hook-form";
import {carService} from "../../services/carService";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";
import {useEffect} from "react";

const CarForm = ({setCars, updateCar}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }

    }, [updateCar])

    const addCar = async (newCar) => {
        if (updateCar) {
            const {data} = await carService.updateById(updateCar.id, newCar);
            if (Object.keys(data).length) {
                const {data} = await carService.getAll()
                setCars(data)
                reset()
            }
        } else {
            const {data} = await carService.create(newCar);
            setCars(prev => [...prev, data])
            reset()
        }
    }

    return (
        <form onSubmit={handleSubmit(addCar)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{updateCar ? 'Update' : 'Add car'}</button>
        </form>
    )
}

export {CarForm}