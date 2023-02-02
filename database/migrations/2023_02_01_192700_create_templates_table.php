<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTemplatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('templates', function (Blueprint $table) {
            $table->id();
            $table->string('title',24);
            $table->integer('height');
            $table->integer('width');
            $table->string('description',40);
            $table->string('sku',20);
            $table->string('imageUrl',100);
            $table->string('barcode');
            $table->string('backGroundColor',);
            $table->string('fontWeightSku',);
            $table->integer('sizeText');
            $table->string('fontWeightText',);
            $table->string('textColor',);
            $table->string('descriptionBorder',);
            $table->string('imageBorder',);
            $table->string('skuBorder',);
            $table->string('barcodeColor',);
            $table->string('barcodeBackgroundColor',);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('templates');
    }
}
