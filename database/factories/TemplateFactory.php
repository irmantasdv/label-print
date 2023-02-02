<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TemplateFactory extends Factory
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
            'title' => $this->faker->city(),
            'description' => $this->faker->text(12),
            'sku' => $this->faker->text(5),
            'imageUrl' => $this->faker->imageUrl(),
            'barcode' => $this->faker->ean13(),
            'backGroundColor' => $this->faker->hexColor(),
            'fontWeightSku' => $this->faker->randomElement([300,400,500,600,700]),
            'sizeText' => $this->faker->randomElement([9,12,11,13]),
            'fontWeightText' => $this->faker->randomElement([300,400,500,600,700]),
            'textColor' => $this->faker->hexColor(),
            'descriptionBorder' => $this->faker->randomElement(["none","solid"]),
            'imageBorder' => $this->faker->randomElement(["none","solid"]),
            'skuBorder' => $this->faker->randomElement(["none","solid"]),
            'barcodeColor' => $this->faker->hexColor(),
            'barcodeBackgroundColor' => $this->faker->hexColor(),
        ];
    }
}

