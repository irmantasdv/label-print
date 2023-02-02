<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLabelTemplateRequest;
use App\Http\Requests\UpdateLabelTemplateRequest;
use App\Http\Resources\LabelResource;
use App\Http\Resources\LabelTemplateCollection;
use App\Models\Label;
use App\Models\LabelTemplate;

class LabelTemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return LabelResource::collection(Label::query()->orderBy('id','desc')->paginate(10));
        return LabelTemplateCollection::collection(LabelTemplate::query()->orderBy('id','desc')->paginate(10));
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
     * @param  \App\Http\Requests\StoreLabelTemplateRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLabelTemplateRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LabelTemplate  $labelTemplate
     * @return \Illuminate\Http\Response
     */
    public function show(LabelTemplate $labelTemplate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LabelTemplate  $labelTemplate
     * @return \Illuminate\Http\Response
     */
    public function edit(LabelTemplate $labelTemplate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateLabelTemplateRequest  $request
     * @param  \App\Models\LabelTemplate  $labelTemplate
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLabelTemplateRequest $request, LabelTemplate $labelTemplate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LabelTemplate  $labelTemplate
     * @return \Illuminate\Http\Response
     */
    public function destroy(LabelTemplate $labelTemplate)
    {
        //
    }
}
