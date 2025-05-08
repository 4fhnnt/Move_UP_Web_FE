import React from 'react'
import SectionCard from './SectionCard';
import AliceCarousel from 'react-alice-carousel';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { shoes } from '../../data/shoes';


const SectionCarosel = ({ data }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const slidePrev = () => {
        setActiveIndex(activeIndex - 1);
    }
    const slideNext = () => {
        setActiveIndex(activeIndex + 1);
    }

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = data.slice(0, 10).map((item) => <SectionCard product={item} />)

    return (

        <div className='relative px-10 lg:px-10'>
            <h2 className='text-2xl font-extrabold text-gray-600 mb-4'>DEAL Tốt</h2>
            <div className='relative p-5 border'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    infinite
                    responsive={responsive}
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== 0 &&
                    <Button variant="contained" className='bg-white z-50'
                        onClick={slidePrev}
                        sx={{
                            position: 'absolute',
                            top: "9rem",
                            left: "-2rem",
                            transform: "translateY(50%) rotate(90deg)",
                            bgcolor: "white"
                        }}
                        aria-label='prev'>
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
                    </Button>
                }
                <Button variant="contained" className='bg-white z-50'
                    onClick={slideNext}
                    sx={{
                        position: 'absolute',
                        top: "9rem",
                        right: "-2rem",
                        transform: "translateY(50%) rotate(90deg)",
                        bgcolor: "white"
                    }}
                    aria-label='next'>
                    <KeyboardArrowRightIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
                </Button>


                {/* <Button variant="contained" className='bg-white z-50'
                    sx={{ 
                        position: 'absolute', 
                        top: "8rem", right: "0rem", 
                        transform: "translateX(50%) rotate(90deg)", 
                        bgcolor:"white" 
                    }}
                    aria-label='prev'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>
                <Button variant="contained" className='bg-white z-50'
                    sx={{ 
                        position: 'absolute', 
                        top: "10rem", 
                        right: "0rem",
                        transform: "translateX(50%) rotate(90deg)", 
                        bgcolor: "white" 
                    }}
                    aria-label=''>
                    <KeyboardArrowRightIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button> */}
            </div>
        </div>

    )
}
export default SectionCarosel;
