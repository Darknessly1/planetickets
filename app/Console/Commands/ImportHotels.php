<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;

class ImportHotels extends Command
{
    protected $signature = 'import:hotels';
    protected $description = 'Import hotels from JSON file';

    public function handle()
    {
        // Read the JSON file
        $json = File::get(database_path('data/hotels.json'));
        $data = json_decode($json, true);

        // Insert data into the 'hotels' table
        foreach ($data as $hotel) {
            DB::table('hotels')->insert([
                'data' => json_encode($hotel),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        $this->info('Hotels imported successfully!');
    }
}
