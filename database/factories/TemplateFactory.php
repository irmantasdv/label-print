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
            'title' => $this->faker->text(),
            'height' => $this->faker->randomNumber(3, true),
            'width' => $this->faker->randomNumber(3, true),
            'title' => $this->faker->city(),
            'description' => $this->faker->text(12),
            'sku' => $this->faker->text(5),
            'sizeSku' => $this->faker->randomElement([10,11,12]),
            'colorSku' => $this->faker->hexColor(),
            'imageUrl' => $this->faker->imageUrl(),
            'barcode' => $this->faker->ean13(),
            'backGroundColor' => $this->faker->hexColor(),
            'backgImage' => $this->faker->imageUrl(),
            'fontWeightSku' => $this->faker->randomElement([300,400,500,600,700]),
            'sizeDescription' => $this->faker->randomElement([9,12,11,13]),
            'fontWeightDescription' => $this->faker->randomElement([300,400,500,600,700]),
            'descriptionTextColor' => $this->faker->hexColor(),
            'descriptionBorder' => $this->faker->randomElement(["none","solid"]),
            'imageBorder' => $this->faker->randomElement(["none","solid"]),
            'skuBorder' => $this->faker->randomElement(["none","solid"]),
            'barcodeColor' => $this->faker->hexColor(),
            'barcodeBackgroundColor' => $this->faker->hexColor(),
            'barcodeHeight' => $this->faker->randomElement([30,40,59]),
            'barcodeWidth' => $this->faker->randomElement([30,40,59]),
//            'user_id' => $this->faker->randomElement([1,2,3])
        ];
    }
}

