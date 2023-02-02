<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class LabelTemplateFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'height' => $this->faker->randomNumber(3, true),
            'width' => $this->faker->randomNumber(3, true),
        ];
    }
}
