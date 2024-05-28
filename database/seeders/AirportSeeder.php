<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use App\Models\Airport;

class AirportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $json = File::get(database_path('data/airports.json'));
        $data = json_decode($json);

        foreach ($data as $item) {
            Airport::create([
                'code' => $item->code,
                'lat' => $item->lat,
                'lon' => $item->lon,
                'name' => $item->name,
                'city' => $item->city,
                'state' => $item->state,
                'country' => $item->country,
                'woeid' => $item->woeid,
                'tz' => $item->tz,
                'phone' => $item->phone,
                'type' => $item->type,
                'email' => $item->email,
                'url' => $item->url,
                'runway_length' => $item->runway_length,
                'elev' => $item->elev,
                'icao' => $item->icao,
                'direct_flights' => $item->direct_flights,
                'carriers' => $item->carriers,
            ]);
        }
    }
}
