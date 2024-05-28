<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use App\Models\NewTicket;

class NewTicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $json = File::get(database_path('data/ticket_2024.json'));
        $data = json_decode($json);

        foreach ($data as $item) {
            NewTicket::create([
                'ticket_id' => $item->ticket_id, 
                'date' => $item->date,
                'departure_airport_code' => $item->departure_airport_code,
                'departure_airport_name' => $item->departure_airport_name,
                'arrival_airport_code' => $item->arrival_airport_code,
                'arrival_airport_name' => $item->arrival_airport_name,
                'airline_code' => $item->airline_code,
                'airline_name' => $item->airline_name,
                'passenger_name' => $item->passenger_name,
            ]);
        }
    }
}
