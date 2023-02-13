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
            $table->string('title',24)->nullable();
            $table->integer('height')->default(400);
            $table->integer('width')->default(300);
            $table->string('description',40)->nullable();
            $table->string('sku',20)->nullable();
            $table->string('sizeSku',20)->default(12)->nullable();
            $table->string('colorSku')->default('black')->nullable();
            $table->string('imageUrl',100)->nullable();
            $table->string('barcode')->nullable();
            $table->string('backGroundColor',)->nullable();
            $table->string('backgImage')->nullable();
            $table->string('fontWeightSku',)->default(300)->nullable();
            $table->integer('sizeDescription')->default(12)->nullable();
            $table->string('fontWeightDescription',)->default(300)->nullable();
            $table->string('descriptionTextColor',)->default('black')->nullable();
            $table->string('descriptionBorder',)->nullable();
            $table->string('imageBorder',)->nullable();
            $table->string('skuBorder',)->nullable();
            $table->string('barcodeColor',)->default('black')->nullable();
            $table->string('barcodeBackgroundColor',)->nullable();
            $table->integer('barcodeHeight')->nullable();
            $table->integer('barcodeWidth')->nullable();
//            $table->unsignedBigInteger('user_id');
//            $table->foreign('user_id')->references('id')->on('users')
//                ->onDelete('cascade');
            $table->timestamps();
        });
    }
//'barcodeColor',
//'barcodeBackgroundColor'

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
