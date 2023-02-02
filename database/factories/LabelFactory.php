<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class LabelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->domainName(),
            'barcode' => $this->faker->ean13(),
            'image_url' => $this->faker->imageUrl(),
            'sku' => $this->faker->randomLetter()
        ];
    }
}
