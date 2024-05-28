<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use App\Models\Hotel;

class HotelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = File::get(database_path('data/hotels.json'));
        $data = json_decode($json);

        foreach ($data as $item) {
            Hotel::create([
                'hotel_id' => $item->hotel_id,
                'chain_id' => $item->chain_id,
                'chain_name' => $item->chain_name,
                'brand_id' => $item->brand_id,
                'brand_name' => $item->brand_name,
                'hotel_name' => $item->hotel_name,
                'hotel_formerly_name' => $item->hotel_formerly_name,
                'hotel_translated_name' => $item->hotel_translated_name,
                'addressline1' => $item->addressline1,
                'addressline2' => $item->addressline2,
                'zipcode' => $item->zipcode,
                'city' => $item->city,
                'state' => $item->state,
                'country' => $item->country,
                'countryisocode' => $item->countryisocode,
                'star_rating' => $item->star_rating,
                'longitude' => $item->longitude,
                'latitude' => $item->latitude,
                'url' => $item->url,
                'checkin' => $item->checkin,
                'checkout' => $item->checkout,
                'numberrooms' => $item->numberrooms,
                'numberfloors' => $item->numberfloors,
                'yearopened' => $item->yearopened,
                'yearrenovated' => $item->yearrenovated,
                'photo1' => $item->photo1,
                'photo2' => $item->photo2,
                'photo3' => $item->photo3,
                'photo4' => $item->photo4,
                'photo5' => $item->photo5,
                'overview' => $item->overview,
                'rates_from' => $item->rates_from,
                'continent_id' => $item->continent_id,
                'continent_name' => $item->continent_name,
                'city_id' => $item->city_id,
                'country_id' => $item->country_id,
                'number_of_reviews' => $item->number_of_reviews,
                'rating_average' => $item->rating_average,
                'rates_currency' => $item->rates_currency,
            ]);
        }
    }
}
