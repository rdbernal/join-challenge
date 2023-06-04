<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class Product extends Model
{
    use HasFactory;

    protected $table='tb_produto';
    protected $primaryKey = 'id_produto';

    protected $fillable = ['nome_produto', 'valor_produto'];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'id_categoria_produto', 'id_categoria_planejamento');
    }
}
