<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewTicket extends Model
{
    use HasFactory;

    protected $fillable = [
        'ticket_id',
        'date',
        'departure_airport_code',
        'departure_airport_name',
        'departure_country',
        'departure_city',
        'arrival_airport_code',
        'arrival_airport_name',
        'arrival_country',
        'arrival_city',
        'airline_code',
        'airline_name',
        'passenger_name',
        'price'
    ];
}
