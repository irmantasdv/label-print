<?php

namespace App\Http\Controllers;

use App\Models\Template;
use Illuminate\Http\Request;

class TemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $templates = Template::all();
        return response()->json(array(
            'templates' => $templates
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
        $template = new Template();

        $template->title = $request->title;
        $template->height = $request->height;
        $template->width = $request->width;
        $template->backGroundColor = $request->backGroundColor;
        $template->description = $request->description;
        $template->sizeDescription = $request->sizeDescription;
        $template->sku = $request->sku;
        $template->imageUrl = $request->imageUrl;
        $template->barcode = $request->barcode;
        $template->backgImage = $request->backgImage;
        $template->colorSku = $request->colorSku;
        $template->sizeSku = $request->sizeSku;
        $template->fontWeightSku = $request->fontWeightSku;
        $template->fontWeightDescription = $request->fontWeightDescription;
        $template->descriptionTextColor = $request->descriptionTextColor;
        $template->descriptionBorder = $request->descriptionBorder;
        $template->imageBorder = $request->imageBorder;
        $template->skuBorder = $request->skuBorder;
        $template->barcodeHeight = $request->barcodeHeight;
        $template->barcodeWidth = $request->barcodeWidth;
        $template->barcodeColor = $request->barcodeColor;
        $template->barcodeBackgroundColor = $request->barcodeBackgroundColor;

        $template->save();


        return response()->json(array(
                'template' => $template
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
        $template = Template::find($id);
        if(empty($template)) {
            return response()->json(array(
                'error' => 'Template not found'
            ),404);
        }
        return response([
            "status" => 1,
            "data" => $template
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
        //
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
//        $student = Student::find($id);
//        $student->name = $request->name;
//        $student->surname = $request->surname;
//        $student->email = $request->email;
//        $student->phone = $request->phone;
//        $student->teacher = $request->teacher;
//
//        $student->save();
//
//        return response()->json(array(
//                'success' => 'Sėkmingai kreiptasi į update metodą',
//                'student' => $student
//            )
//        );

        $template = Template::find($id);

        $template->title = $request->title;
        $template->height = $request->height;
        $template->width = $request->width;
        $template->backGroundColor = $request->backGroundColor;
        $template->description = $request->description;
        $template->sizeDescription = $request->sizeDescription;
        $template->sku = $request->sku;
        $template->imageUrl = $request->imageUrl;
        $template->barcode = $request->barcode;
        $template->backgImage = $request->backgImage;
        $template->colorSku = $request->colorSku;
        $template->sizeSku = $request->sizeSku;
        $template->fontWeightSku = $request->fontWeightSku;
        $template->fontWeightDescription = $request->fontWeightDescription;
        $template->descriptionTextColor = $request->descriptionTextColor;
        $template->descriptionBorder = $request->descriptionBorder;
        $template->imageBorder = $request->imageBorder;
        $template->skuBorder = $request->skuBorder;
        $template->barcodeHeight = $request->barcodeHeight;
        $template->barcodeWidth = $request->barcodeWidth;
        $template->barcodeColor = $request->barcodeColor;
        $template->barcodeBackgroundColor = $request->barcodeBackgroundColor;

        $template->save();


        return response()->json(array(
                'success' => 'Sėkmingai kreiptasi į update metodą',
                'template' => $template
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

        $template = Template::find($id);
        if(empty($template)) {
            return response()->json(array(
                'error' => 'Template not found'
            ),404);
        }
    try{
        $template->delete();
    } catch (Exeption $ex){
            return response([
                "message" => "Unknown error hapened",
                "error" => $ex
            ],500);
    }

        return response()->json(array(
            "status" => 1,
            "message" => "Template deleted",
            "data" => $template
        ),200);
    }
}
