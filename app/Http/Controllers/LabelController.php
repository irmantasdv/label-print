<?php

namespace App\Http\Controllers;

use App\Models\Label;
use Illuminate\Http\Request;

class LabelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $labels = Label::all();
        return response()->json(array(
            'labels' => $labels
        ),200);
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $labelsArray = $request->json()->all();

        foreach($labelsArray as $data)
        {

            $container = new Label([
                'sku' => $data['sku'],
                'imageUrl' => $data['imageUrl'],
                'description' => $data['description'],
                'barcode' => $data['barcode']
            ]);
            $container->save();
        }
        die();
        $label = new Label();

        $label->description = $request->description;
        $label->sku = $request->sku;
        $label->imageUrl = $request->imageUrl;
        $label->barcode = $request->barcode;

        try{
            $label->save();
        } catch (Exeption $ex) {
            return response()->json(array(
                'message' => 'Unknown error'
            ),500
            );
        }

        return response()->json(array(
            'label' => $label
        ),201
        );

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $label = Label::find($id);
        if(empty($label)) {
            return response()->json(array(
                'error' => 'Label not found'
            ),404);
        }
        return response([
            "status" => 1,
            "data" => $label
        ],200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $label = Label::find($id);

        $label->title = $request->title;
        $label->height = $request->height;
        $label->width = $request->width;
        $label->backGroundColor = $request->backGroundColor;
        $label->description = $request->description;
        $label->sizeDescription = $request->sizeDescription;
        $label->sku = $request->sku;
        $label->imageUrl = $request->imageUrl;
        $label->barcode = $request->barcode;
        $label->backgImage = $request->backgImage;
        $label->colorSku = $request->colorSku;
        $label->sizeSku = $request->sizeSku;
        $label->fontWeightSku = $request->fontWeightSku;
        $label->fontWeightDescription = $request->fontWeightDescription;
        $label->descriptionTextColor = $request->descriptionTextColor;
        $label->descriptionBorder = $request->descriptionBorder;
        $label->imageBorder = $request->imageBorder;
        $label->skuBorder = $request->skuBorder;
        $label->barcodeHeight = $request->barcodeHeight;
        $label->barcodeWidth = $request->barcodeWidth;
        $label->barcodeColor = $request->barcodeColor;
        $label->barcodeBackgroundColor = $request->barcodeBackgroundColor;

        $label->save();


        return response()->json(array(
                'success' => 'Sėkmingai kreiptasi į update metodą',
                'label' => $label
            )
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $label = Label::find($id);
        if(empty($label)) {
            return response()->json(array(
                'error' => 'Label not found'
            ),404);
        }
    try{
        $label->delete();
    } catch (Exeption $ex){
            return response([
                "message" => "Unknown error hapened",
                "error" => $ex
            ],500);
    }

        return response()->json(array(
            "status" => 1,
            "message" => "Label deleted",
            "data" => $label
        ),200);
    }
    }
