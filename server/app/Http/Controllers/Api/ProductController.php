<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\Category;
use DateTime;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return response()->json([
            'status' => true,
            'products' => $products
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
          'nome_produto' => 'required|unique:App\Models\Product,nome_produto',
          'valor_produto' => 'required|numeric|min:0.1'
        ]);

        $category = Category::find($request['id_categoria_produto']);

        if (!isset($category)) {
          return response()->json([
            'message' => 'Category not found'
          ], 400);
        };

        $product = new Product;
        $product->data_cadastro = new DateTime('now');
        $product->nome_produto = strtolower($request->nome_produto);
        $product->valor_produto = $request->valor_produto;
        $product->id_categoria_produto = $category->id_categoria_planejamento;
        $product->save();

        return response()->json([
          'status' => true,
          'message' => 'Product created successfully!',
          'product' => $product
      ], 201);
    }

    public function show(Product $product)
    {
        $product = Product::find($product);

        return response()->json([
            'status' => true,
            'product' => $product
        ], 200);
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
          'nome_produto' => 'required|unique:App\Models\Product,nome_produto',
          'valor_produto' => 'required|numeric|min:0.1'
        ]);

        $updatedProduct = $request->all();
        $updatedProduct['nome_produto'] = strtolower($updatedProduct['nome_produto']);

        $product->update($updatedProduct);

        return response()->json([
            'status' => true,
            'message' => "Product updated successfully!",
            'product' => $product
        ], 201);
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json([
            'status' => true,
            'message' => "Product deleted successfully!",
        ], 200);
    }
}
