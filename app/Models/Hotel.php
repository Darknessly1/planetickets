<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;

    protected $fillable = [
        'hotel_id',
        'chain_id',
        'chain_name',
        'brand_id',
        'brand_name',
        'hotel_name',
        'hotel_formerly_name',
        'hotel_translated_name',
        'addressline1',
        'addressline2',
        'zipcode',
        'city',
        'state',
        'country',
        'countryisocode',
        'star_rating',
        'longitude',
        'latitude',
        'url',
        'checkin',
        'checkout',
        'numberrooms',
        'numberfloors',
        'yearopened',
        'yearrenovated',
        'photo1',
        'photo2',
        'photo3',
        'photo4',
        'photo5',
        'overview',
        'rates_from',
        'continent_id',
        'continent_name',
        'city_id',
        'country_id',
        'number_of_reviews',
        'rating_average',
        'rates_currency',
    ];
}
