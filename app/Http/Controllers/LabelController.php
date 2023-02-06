<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLabelRequest;
use App\Http\Requests\UpdateLabelRequest;
use App\Http\Resources\LabelResource;
use App\Models\Label;
use Illuminate\Support\Facades\Validator;

class LabelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return LabelResource::collection(Label::query()->orderBy('id','desc')->paginate(10));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreLabelRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLabelRequest $request)
    {
        $label = Label::create($request->all());
        return [
            "status" => 1,
            "data" => $label
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Label  $label
     * @return \Illuminate\Http\Response
     */
    public function show(Label $label)
    {
        return [
            "status" => 1,
            "data" => $label
        ];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Label  $label
     * @return \Illuminate\Http\Response
     */
    public function edit(Label $label)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateLabelRequest  $request
     * @param  \App\Models\Label  $label
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLabelRequest $request, Label $label)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:2',
            'height' => 'required|numeric',
            'width' => 'required|numeric',
            'imageUrl' => 'URL',
            'backGroundColor' => 'max:12',
            'description' => 'min:2|max:120',
            'sizeDescription' => 'numeric|max:12',
            'sku' => 'max:12',
            'barcode' => 'max:15',
//            'backgImage' => 'URL',
            'colorSku' => 'max:12',
            'sizeSku' => 'numeric|max:40',
            'fontWeightSku' => 'numeric|max:700',
            'fontWeightDescription' => 'numeric|max:700',
            'descriptionTextColor' => 'max:12',
            'descriptionBorder' => 'alpha|max:5',
            'imageBorder' => 'alpha|max:5',
            'skuBorder' => 'alpha|max:5',
            'barcodeHeight' => 'max:40',
            'barcodeWidth' => 'max:40',
            'barcodeColor' => 'max:12',
            'barcodeBackgroundColor' => 'max:12',


        ]);
        if ($validator->fails()) {
            return response()->json(
                array(
                    'message' => 'Validation failed',
                    'errors' => $validator->errors()
                )
            );

        }
        $label->update($request->all());
        return [
            "status" => 1,
            "data" => $label,
            "message" => "Template updated successfully"
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Label  $label
     * @return \Illuminate\Http\Response
     */
    public function destroy(Label $label)
    {
        $label->delete();
        return response()->json('Label deleted successfully');
    }
}
