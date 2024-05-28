<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('dashboard_tickets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ticket_id')->constrained('tickets', 'TicketID')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('dashboard_tickets');
    }
};
