<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'PassengerName', 'FlightNumber', 'DepartureAirport', 'ArrivalAirport', 
        'DepartureDateTime', 'ArrivalDateTime', 'SeatNumber', 'Price', 'Airline'
    ];

    public function users() {
        return $this->belongsToMany(User::class)->withPivot('purchased')->withTimestamps();
    }
}
