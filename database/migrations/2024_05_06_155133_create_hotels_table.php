<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->id();
            $table->string('hotel_id');
            $table->string('chain_id');
            $table->string('chain_name');
            $table->string('brand_id');
            $table->string('brand_name');
            $table->string('hotel_name');
            $table->string('hotel_formerly_name');
            $table->string('hotel_translated_name');
            $table->string('addressline1');
            $table->string('addressline2');
            $table->string('zipcode');
            $table->string('city');
            $table->string('state');
            $table->string('country');
            $table->string('countryisocode');
            $table->integer('star_rating');
            $table->double('longitude', 10, 6);
            $table->double('latitude', 10, 6);
            $table->text('url');
            $table->string('checkin');
            $table->string('checkout');
            $table->integer('numberrooms')->nullable();
            $table->smallInteger('numberfloors')->nullable();
            $table->smallInteger('yearopened')->nullable();
            $table->smallInteger('yearrenovated')->nullable();
            $table->text('photo1');
            $table->text('photo2');
            $table->text('photo3');
            $table->text('photo4');
            $table->text('photo5');
            $table->text('overview');
            $table->integer('rates_from');
            $table->integer('continent_id');
            $table->string('continent_name');
            $table->integer('city_id');
            $table->integer('country_id');
            $table->integer('number_of_reviews');
            $table->integer('rating_average');
            $table->string('rates_currency');
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hotels');
    }
};
