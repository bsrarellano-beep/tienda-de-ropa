import { Injectable, Inject } from '@nestjs/common'; 
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly productRepository: Repository<Product>
  ) {}

  async create(createProductDto: CreateProductDto) {
    const nuevoProducto = this.productRepository.create(createProductDto);
    return await this.productRepository.save(nuevoProducto);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    return await this.productRepository.findOne({ where: { id }});
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.productRepository.update(id, updateProductDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const productoEliminar = await this.findOne(id);
    await this.productRepository.delete(id);
    return { mensaje: `Producto con ID #${id} eliminado con éxito`, productoEliminar };
  }
}