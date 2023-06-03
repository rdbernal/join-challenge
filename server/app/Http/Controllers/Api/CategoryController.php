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
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
          'nome_categoria' => 'required|unique:App\Models\Category,nome_categoria',
        ]);

        $newCategory = $request->all();
        $newCategory['nome_categoria'] = strtolower($newCategory['nome_categoria']);

        $category = Category::create($newCategory);

        return response()->json([
            'status' => true,
            'message' => "Category created successfully!",
            'category' => $category
        ], 200);
    }

    public function show(Category $category)
    {
        $category = Category::find($category);

        return response()->json([
            'status' => true,
            'category' => $category
        ]);
    }

    public function update(Request $request, Category $category)
    {
        $category->update($request->all());

        return response()->json([
            'status' => true,
            'message' => "Category updated successfully!",
            'category' => $category
        ], 200);
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
