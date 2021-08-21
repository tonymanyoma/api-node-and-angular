import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { get } from 'http';
import { CreateProductDTO } from './dto/product.dto'

import { ProductService } from './product.service'


@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {}

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        const product = await this.productService.createProduct(createProductDTO);
       return res.status(HttpStatus.OK).json({
            message: 'Producto creado con éxito',
            product: product
        });
    }

    @Get('/')
    async getProducts(@Res() res) {
       const products = await this.productService.getProducts();
       return res.status(HttpStatus.OK).json({
           products: products
       })
    }

    @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID) {
       const product = await this.productService.getProduct(productID);
       if (!product) throw new NotFoundException('El producto no existe');
       return res.status(HttpStatus.OK).json(product)
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productID') productID) {
       const product = await this.productService.deleteProduct(productID);
       if (!product) throw new NotFoundException('El producto no existe');
       return res.status(HttpStatus.OK).json({
           message: 'Producto eliminado con éxito',
           product: product
       })
    }

    @Put('/update')
    async updateProduct(@Res() res,@Body() createProductDTO: CreateProductDTO, @Query('productID') productID) {
       const updatedProduct = await this.productService.updateProduct(productID, createProductDTO);
       if (!updatedProduct) throw new NotFoundException('El producto no existe');
       return res.status(HttpStatus.OK).json({
           message: 'Producto actualizado con éxito',
           updatedProduct: updatedProduct
       })
    }

    
}
