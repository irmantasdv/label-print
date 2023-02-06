<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LabelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
//        return parent::toArray($request);
        return[
            'id' => $this->id,
            'title' => $this->title,
            'width' => $this->width,
            'height' => $this->height,
            'sku' => $this->sku,
            'sizeSku' => $this->sizeSku,
            'colorSku' => $this->colorSku,
            'description' => $this->description,
            'barcode' => $this->barcode,
            'imageUrl' => $this->imageUrl,
            'backGroundColor' => $this->backGroundColor,
            'backgImage' => $this->backgImage,
            'fontWeightSku' => $this->fontWeightSku,
            'sizeDescription' => $this->sizeDescription,
            'fontWeightDescription' => $this->fontWeightDescription,
            'descriptionTextColor' => $this->descriptionTextColor,
            'descriptionBorder' => $this->descriptionBorder,
            'imageBorder' => $this->imageBorder,
            'skuBorder' => $this->skuBorder,
            'barcodeColor' => $this->barcodeColor,
            'barcodeBackgroundColor' => $this->barcodeBackgroundColor,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
