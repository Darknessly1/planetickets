<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('dashboard_tickets', function (Blueprint $table) {
            $table->foreignId('new_ticket_id')->nullable()->constrained('new_tickets', 'ticket_id')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::table('dashboard_tickets', function (Blueprint $table) {
            $table->dropForeign(['new_ticket_id']);
            $table->dropColumn('new_ticket_id');
        });
    }
};
