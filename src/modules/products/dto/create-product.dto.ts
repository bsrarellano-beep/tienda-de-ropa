import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ 
    example: 'Mouse Gamer RGB', 
    description: 'El nombre comercial del producto de inventario' 
  })
  nombre!: string;

  @ApiProperty({ 
    example: 'Mouse óptico ergonómico con hasta 3200 DPI', 
    description: 'Una descripción detallada de las características del artículo' 
  })
  descripcion!: string;

  @ApiProperty({ 
    example: 20, 
    description: 'La cantidad inicial de unidades disponibles en bodega' 
  })
  stock!: number;

  @ApiProperty({ 
    example: 10.50, 
    description: 'El precio unitario de venta al público' 
  })
  precio!: number;
}