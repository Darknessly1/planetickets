<?php

use App\Http\Controllers\AirportLocationsController;
use App\Http\Controllers\DashboardTicketController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\FlightInfoController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\NewTicketController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\TicketController;
use App\Models\Ticket;
use Illuminate\Http\Request;

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

Route::get('/services',  function () {
    return Inertia::render('header/Services');
});


// this is for the new tickets:
Route::get('/api/tickets', [NewTicketController::class, 'index']);


Route::post('/add-ticket', [TicketController::class, 'addTicket'])->middleware('auth');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/api/flights', [TicketController::class, 'index']);
Route::get('/api/newtickets', [TicketController::class, 'index']);

Route::post('/add-to-dashboard', [TicketController::class, 'addToDashboard']);
Route::get('/dashboard-tickets', [TicketController::class, 'getDashboardTickets']);
Route::delete('/dashboard-tickets/{id}', [TicketController::class, 'deleteFromDashboard']);


Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->name('register');

Route::get('/dashboard-tickets', [DashboardTicketController::class, 'getAllTickets']);
Route::post('/dashboard-tickets/add', [DashboardTicketController::class, 'addTicketToDashboard']);
Route::delete('/dashboard-tickets/{id}', [DashboardTicketController::class, 'deleteTicketFromDashboard']);

Route::get('/ticket/{id}', function ($id) {
    $ticket = Ticket::find($id);
    if (!$ticket) {
        return response()->json(['error' => 'Ticket not found'], 404);
    }
    return response()->json($ticket);
});


Route::middleware(['auth', 'verified'])->get('/confirm-purchase', function (Illuminate\Http\Request $request) {
    $ticketId = $request->input('ticketId');
    return Inertia::render('header/ConfirmPurchase', ['ticketId' => $ticketId]);
})->name('confirm-purchase');


Route::post('/confirm-purchase', [PurchaseController::class, 'confirmPurchase']);

Route::get('/purchase/create', [PurchaseController::class, 'create'])->name('purchase.create');
Route::post('/purchase/store', [PurchaseController::class, 'store'])->name('purchase.store');

Route::post('/purchase/store', [PurchaseController::class, 'store'])->name('purchase.store');




Route::post('/dashboard/add', [DashboardTicketController::class, 'addToDashboard']);

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


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
