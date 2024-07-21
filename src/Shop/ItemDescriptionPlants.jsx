import React, { useEffect, useState } from 'react'
import Reviews from './Reviews'

const ItemDescriptionPlants = () => {

    const [state, setState] = useState(true)
    const [secondState, setSecondState] = useState(false)

    const handleCLickOptionsFirst = () => {
        setState(true)
        setSecondState(false)
    }

    const handleClickOptionsSecond = () => {
        setState(false)
        setSecondState(true)
    }

  return (
    <section>
        <div className='container'>
            <div className="description__plants">
                <p onClick={handleCLickOptionsFirst} className={state ? 'description__product-about' : 'description__header-active'}>Product Description</p>
                <p onClick={handleClickOptionsSecond} className={secondState ? 'description__reviews-active' : 'description__reviews'}>Reviews (19)</p>
            </div>
            {
                secondState ? <Reviews /> : null
            }
            {
                state ? <><div className='description__block-first'>
                <p className='description__block-first-item'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
                Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
            </div>
            <div className='description__block-second'>
                <h3 className='description__block-second-header'>Living Room:</h3>
                <p className="description__second-product">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='description__block-third'>
            <h3 className='description__block-third-header'>Dining Room:</h3>
                <p className="description__third-product">The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</p>
            </div>
            <div className='description__block-forth'>
            <h3 className='description__block-forth-header'>Office:</h3>
                <p className="description__forth-product">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>  
            </> : null
            }
            
        </div>
    </section>
  )
}

export default ItemDescriptionPlants