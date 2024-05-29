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
        $json = File::get(database_path('data/ticket_data_2024.json'));
        $data = json_decode($json);

        
        foreach ($data as $item) {
            $price = str_replace('$', '', $item->price);
            NewTicket::create([
                'ticket_id' => $item->ticket_id,
                'date' => $item->date,
                'departure_airport_code' => $item->departure_airport_code,
                'departure_airport_name' => $item->departure_airport_name,
                'departure_country' => $item->departure_country,
                'departure_city' => $item->departure_city,
                'arrival_airport_code' => $item->arrival_airport_code,
                'arrival_airport_name' => $item->arrival_airport_name,
                'arrival_country' => $item->arrival_country,
                'arrival_city' => $item->arrival_city,
                'airline_code' => $item->airline_code,
                'airline_name' => $item->airline_name,
                'price' => $price,
            ]);
        }
    }
}
