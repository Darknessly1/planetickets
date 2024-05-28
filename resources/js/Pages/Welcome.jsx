
import FlightBookingCard from '@/Pages/header/FlightBookingCard';
import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import {  Head } from '@inertiajs/react';

export default function Welcome({ auth, user }) {
    return (
        <>
            
                <Nav auth={auth} user={user} />
                <Head title="Home" />
                <FlightBookingCard />
                <Footer />
            
        </>
    );
}
