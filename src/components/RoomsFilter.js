import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from '../components/Title'

//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(items => items[value]))]
}

function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;
    //get unique type
    let types = getUnique(rooms, 'type');
    //add All to select
    types = ['all', ...types];
    //map to JSX
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className='filter-container'>
            <Title title='Search Rooms' />
            <form className='filter-form'>
                {/*select type */}
                <div className='form-group'>
                    <label htmlFor='type'>Room Type</label>
                    <select
                        name='type'
                        id='type'
                        value={type}
                        className='form-control'
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/*end of select type*/}
                {/*select guests */}
                <div className='form-group'>
                    <label htmlFor='capacity'>Guests</label>
                    <select
                        name='capacity'
                        id='capacity'
                        value={capacity}
                        className='form-control'
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/*end of select guest*/}
                {/*Room Price*/}
                <div className='form-group'>
                    <label htmlFor='price'>Room Price ${price}</label>
                    <input 
                    type='range' 
                    name='price' 
                    min={minPrice} 
                    max={maxPrice} 
                    id='price' 
                    value={price} 
                    onChange={handleChange} 
                    className='form-control' />
                </div>
                {/*end of Room Price*/}
                {/*size*/}
                <div className='form-group'>
                    <label htmlFor='size'>Room Size</label>
                    <div className='form-group'>
                    <input 
                    type='number' 
                    name='minSize' 
                    id='size' 
                    value={minSize} 
                    onChange={handleChange} 
                    className='size-input' />
                    <input 
                    type='number' 
                    name='maxSize' 
                    id='size' 
                    value={maxSize} 
                    onChange={handleChange} 
                    className='size-input'max/>
                    </div>
                </div>
                {/*end of size*/}
                {/*extras*/}
                <div className='form-group'>
                    <div className='single-extra'>
                        <input
                        type='checkbox'
                        name='breakfast'
                        id='breakfast'
                        checked={breakfast}
                        onChange={handleChange}/>
                        <label htmlFor='breakfast'>breakfast</label>
                    </div>
                    <div className='single-extra'>
                        <input
                        type='checkbox'
                        name='pets'
                        id='pets'
                        checked={pets}
                        onChange={handleChange}/>
                        <label htmlFor='pets'>pets</label>
                    </div>
                </div>
                {/*end of extras*/}
            </form>
        </section>
    )
}

export default RoomsFilter
