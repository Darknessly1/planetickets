<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use Inertia\Inertia;

class HotelController extends Controller
{
    public function index()
    {
        $hotels = Hotel::select(
            'hotel_name',
            'addressline1',
            'city',
            'state',
            'country',
            'star_rating',
            'number_of_reviews',
            'continent_name',
            'overview',
            'photo1',
            'photo2',
            'photo3',
            'photo4',
            'photo5'
        )
            ->get();
        return response()->json($hotels);
    }
}
