import React from 'react'
import Header from '../components/Header'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { CompaignCards, ActionListData } from '../dataSrc/data.js'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { SlideFade } from '@chakra-ui/react'
// components
import CompaignsCard from '../components/CompaignsCard';
import ActionList from '../components/ActionList';
import CardSection from '../components/CardSection';




export default function Dashboard() {
    const options = {
        responsive: {
            0: {
                items: 1.2,
            },
            400: {
                items: 1.5,
            },
            600: {
                items: 2.5,
            },
            700: {
                items: 2.8,
            },
            1000: {
                items: 4.3,

            },
            1500: {
                items: 5.5,

            }
        },
    };

    return (
        <div className='dashboard-page'>
            <Header />
            <div className='compaigns-slider ps-4 mb-4'>
                <h2 className='mb-3 d-inline-block'>SİZE ÖZEL KAMPANYALAR</h2>
                <SlideFade in={true} offsetY='30px'>
                    <OwlCarousel className='owl-theme' loop margin={10} items={4.2} nav dots  {...options}>
                        {CompaignCards.map(card => <CompaignsCard key={card.id} cardData={card} />)}
                    </OwlCarousel>
                </SlideFade>
            </div>
            <div className='action-list-section px-4 mb-5'>
                <div className='section-heading'>
                    <h2 className='mb-3'>HESAP HAREKETLERİ</h2>
                    <a className='link'>Harcama Analizi <ChevronRightIcon /></a>
                </div>
                <SlideFade in={true} offsetY='30px'>
                    <ActionList ActionListData={ActionListData} />
                </SlideFade>
            </div>
            <div className='px-4 mb-5'>
                <SlideFade in={true} offsetY='30px'>
                    <CardSection />
                </SlideFade>
            </div>

        </div>

    )
}
