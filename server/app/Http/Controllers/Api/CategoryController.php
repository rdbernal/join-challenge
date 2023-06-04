<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();

        return response()->json([
            'status' => true,
            'categories' => $categories
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
          'nome_categoria' => 'required|unique:App\Models\Category,nome_categoria',
        ]);

        $category = new Category;
        $category->nome_categoria = strtolower($request->nome_categoria);
        $category->save();

        return response()->json([
          'status' => true,
          'message' => 'Category created successfully',
          'category' => $category
        ], 201);
    }

    public function show(Category $category)
    {
        $category = Category::find($category);

        return response()->json([
            'status' => true,
            'category' => $category
        ], 200);
    }

    public function update(Request $request, Category $category)
    {
        $validated = $request->validate([
          'nome_categoria' => 'required|unique:App\Models\Category,nome_categoria',
        ]);

        $updatedCategory = $request->all();
        $updatedCategory['nome_categoria'] = strtolower($updatedCategory['nome_categoria']);

        $category->update($updatedCategory);

        return response()->json([
            'status' => true,
            'message' => "Category updated successfully!",
            'category' => $category
        ], 201);
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return response()->json([
            'status' => true,
            'message' => "Category deleted successfully!",
        ], 200);
    }
}
