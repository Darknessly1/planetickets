<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('new_tickets', function (Blueprint $table) {
            $table->id();
            $table->integer('ticket_id')->unique();
            $table->date('date');
            $table->string('departure_airport_code');
            $table->string('departure_airport_name');
            $table->string('arrival_airport_code');
            $table->string('arrival_airport_name');
            $table->string('airline_code');
            $table->string('airline_name');
            $table->string('passenger_name');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('tickets');
    }
};
