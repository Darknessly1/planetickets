<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketsTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id('TicketID');
            $table->string('PassengerName');
            $table->string('FlightNumber');
            $table->string('DepartureAirport');
            $table->string('ArrivalAirport');
            $table->timestamp('DepartureDateTime');
            $table->timestamp('ArrivalDateTime');
            $table->string('SeatNumber');
            $table->decimal('Price', 8, 2);
            $table->string('Airline');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('tickets');
    }
}
