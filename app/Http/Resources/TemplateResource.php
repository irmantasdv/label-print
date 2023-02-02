<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TemplateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return[
            'id' => $this->id,
            'title' => $this->title,
            'width' => $this->width,
            'height' => $this->height,
            'sku' => $this->sku,
            'description' => $this->description,
            'barcode' => $this->barcode,
            'imageUrl' => $this->imageUrl,
            'backGroundColor' => $this->backGroundColor,
            'fontWeightSku' => $this->fontWeightSku,
            'sizeText' => $this->sizeText,
            'fontWeightText' => $this->fontWeightText,
            'textColor' => $this->textColor,
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

