<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'barcode',
        'height',
        'width',
        'backGroundColor',
        'description',
        'sizeDescription',
        'sku',
        'colorSku',
        'imageUrl',
        'backgImage',
        'colorSku',
        'sizeSku',
        'fontWeightSku',
        'fontWeightDescription',
        'descriptionTextColor',
        'descriptionBorder',
        'imageBorder',
        'skuBorder',
        'barcodeHeight',
        'barcodeWidth',
        'barcodeColor',
        'barcodeBackgroundColor',
        'barcodeHeight',
        'barcodeWidth'
    ];

    /**

     * Get the User that owns the template.

     */

    public function user()

    {

        return $this->belongsTo(User::class);

    }
}
