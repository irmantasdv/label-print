<?php

namespace Database\Seeders;

use App\Models\LabelTemplate;
use Illuminate\Database\Seeder;

class LabelTemplateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        LabelTemplate::factory()->count(10)->create();
    }
}
