<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Category extends Model
{
    use HasFactory;

    protected $table='tb_categoria_produto';
    protected $primaryKey = 'id_categoria_planejamento';

    protected $fillable = ['nome_categoria'];

    public function products(): HasMany
    {
        return $this->hasMany(Product::class, 'id_categoria_produto', 'id_categoria_planejamento');
    }
}
