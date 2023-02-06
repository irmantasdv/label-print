<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTemplateRequest;
use App\Http\Requests\UpdateTemplateRequest;
use App\Http\Resources\TemplateResource;
use Illuminate\Support\Facades\Validator;
use App\Models\Template;

class TemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return LabelResource::collection(Label::query()->orderBy('id','desc')->paginate(10));
        return TemplateResource::collection(Template::query()->orderBy('id','asc')->paginate(22));
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
     * @param  \App\Http\Requests\StoreTemplateRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTemplateRequest $request)
    {


        $template = Template::create($request->all());
        return [
            "status" => 1,
            "data" => $template
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Template  $template
     * @return \Illuminate\Http\Response
     */
    public function show(Template $template)
    {
        return [
            "status" => 1,
            "data" => $template
        ];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Template  $template
     * @return \Illuminate\Http\Response
     */
    public function edit(Template $template)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTemplateRequest  $request
     * @param  \App\Models\Template  $template
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTemplateRequest $request, Template $template)
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
        $height = $request->height;
        $width = $request->width;
        if ($height > $width) {
            if (($height - $width) > $width * 3) {
                return response()->json(
                    array("status" => 0,
                        "message" => "Template height (" . $height . "px) too big for width (" . $width . "px)"
                    ));

            } else {
                if (($width - $height) > $height * 3) {
                    return [
                        "status" => 0,
                        "message" => "Template width (" . $width . "px) too big for height (" . $height . "px)"
                    ];
                }
            }
        }
                $template->update($request->all());
                return [
                    "status" => 1,
                    "data" => $template,
                    "message" => "Template updated successfully"
                ];


        }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Template  $template
     * @return \Illuminate\Http\Response
     */
    public function destroy(Template $template)
    {
        $template->delete();
        return response()->json('Template deleted successfully');
    }
}
