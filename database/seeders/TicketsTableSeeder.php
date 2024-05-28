<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use App\Models\Ticket;

class TicketsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $json = File::get(database_path('data/tickets.json'));
        $data = json_decode($json);

        foreach ($data as $item) {
            Ticket::create([
                'TicketID' => $item->TicketID,
                'PassengerName' => $item->PassengerName,
                'FlightNumber' => $item->FlightNumber,
                'DepartureAirport' => $item->DepartureAirport,
                'ArrivalAirport' => $item->ArrivalAirport,
                'DepartureDateTime' => $item->DepartureDateTime,
                'ArrivalDateTime' => $item->ArrivalDateTime,
                'SeatNumber' => $item->SeatNumber,
                'Price' => $item->Price,
                'Airline' => $item->Airline,
            ]);
        }
    }
}
