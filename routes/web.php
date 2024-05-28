<?php

use App\Http\Controllers\AirportLocationsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\FlightInfoController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\TicketController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::get('/tickets', function () {
    return Inertia::render('header/Tickets');
});
Route::get('/newoffers', function () {
    return Inertia::render('header/Newoffers');
});

Route::get('/news',  function () {
    return Inertia::render('header/News');
});

Route::get('/cities', [DestinationController::class, 'index'], function () {
    return Inertia::render('header/Cities');
});

Route::get('/airports',  function () {
    return Inertia::render('header/Airports');
});

Route::get('/contact',  function () {
    return Inertia::render('header/Contact');
});

Route::get('/flightTicketDetail',  function () {
    return Inertia::render('header/FlightTicketDetail');
});

Route::get('/hotels',  function () {
    return Inertia::render('header/Hotels');
});

Route::get('/aboutus',  function () {
    return Inertia::render('header/Aboutus');
});


Route::post('/add-ticket', [TicketController::class, 'addTicket'])->middleware('auth');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/api/flights', [TicketController::class, 'index']);

Route::post('/add-to-dashboard', [TicketController::class, 'addToDashboard']);
Route::get('/dashboard-tickets', [TicketController::class, 'getDashboardTickets']);



Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->name('register');





Route::get('/api/hotels', [HotelController::class, 'index']);

Route::get('/api/airport', [AirportLocationsController::class, 'index']);


Route::get('/proxy-news', function () {
    $response = Http::get('https://gnews.io/api/v4/top-headlines', [
        'category' => 'general',
        'lang' => 'en',
        'country' => 'us',
        'max' => 100,
        'apikey' => 'a11bb6b3ffd8775860ed8c04460083d5',
    ]);

    return $response->body();
});



Route::get('/proxy-amadeus-locations', function () {
    try {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer fkJxYjUwJ8FevIi0uBQjY9pAulwo',
        ])->get('https://test.api.amadeus.com/v1/reference-data/locations', [
            'subType' => 'CITY',
            'keyword' => 'MUC',
            'page[limit]' => 10,
            'page[offset]' => 0,
            'sort' => 'analytics.travelers.score',
            'view' => 'FULL',
        ]);

        return $response->json();
    } catch (\Exception $e) {
        return response()->json(['error' => 'Internal server error'], 500);
    }
});



Route::get('/flight-tickets', function () {
    $response = Http::withHeaders([
        'accept' => 'application/json',
        'apikey' => 'XvPBBJt16Efdg3uPDXDjAj5RZ5LdcTOa',
    ])->get('https://api.tequila.kiwi.com/v2/search', [
        'fly_from' => 'FRA',
        'fly_to' => 'LAX',
        'date_from' => '01/04/2024',
        'date_to' => '07/12/2024',
        'return_from' => '04/04/2024',
        'return_to' => '07/12/2024',
        'nights_in_dst_from' => 2,
        'nights_in_dst_to' => 3,
        'max_fly_duration' => 20,
        'ret_from_diff_city' => true,
        'ret_to_diff_city' => true,
        'one_for_city' => 0,
        'one_per_date' => 0,
        'adults' => 2,
        'children' => 2,
        'selected_cabins' => 'C',
        'mix_with_cabins' => 'M',
        'adult_hold_bag' => '1,0',
        'adult_hand_bag' => '1,1',
        'child_hold_bag' => '2,1',
        'child_hand_bag' => '1,1',
        'only_working_days' => false,
        'only_weekends' => false,
        'partner_market' => 'us',
        'max_stopovers' => 2,
        'max_sector_stopovers' => 2,
        'vehicle_type' => 'aircraft',
        'limit' => 500,
    ]);

    return $response->json();
});



Route::get('/search-flight-tickets', function () {
    $formData = request()->validate([
        'departureCity' => 'required|string',
        'destinationCity' => 'required|string',
        'departureDate' => 'required|date',
        'returnDate' => 'nullable|date',
    ]);

    $response = Http::withHeaders([
        'accept' => 'application/json',
        'apikey' => 'XvPBBJt16Efdg3uPDXDjAj5RZ5LdcTOa',
    ])->get('https://api.tequila.kiwi.com/v2/search', [
        'fly_from' => $formData['departureCity'],
        'fly_to' => $formData['destinationCity'],
        'date_from' => $formData['departureDate'],
        'date_to' => $formData['returnDate'] ?? $formData['departureDate'],
        'limit' => 10,
    ]);

    return $response->json();
});

Route::get('/api/destinations', function () {
    try {
        $response = Http::get('https://api.opentripmap.com/0.1/en/places/bbox', [
            'lon_min' => -180,
            'lon_max' => 180,
            'lat_min' => -90,
            'lat_max' => 90,
            'format' => 'json',
            'apikey' => '5ae2e3f221c38a28845f05b6f701c26e6d0f1b27aecd1863cc210be4',
        ]);
        return $response->json();
    } catch (Exception $e) {
        return response()->json(['error' => 'Failed to fetch destinations'], 500);
    }
});


Route::get('/flight-info', [FlightInfoController::class, 'index']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
