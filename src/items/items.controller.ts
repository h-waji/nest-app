import { Body, Controller, Get, Post } from '@nestjs/common';
import { Item } from './item.model';
import { ItemsService } from './items.service';
import { ItemStatus } from './item-status.enum';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService) {}

    @Get()
    findAll() {
        return this.itemService.findAll();
    }

    @Post()
    create(
        @Body('id') id: string,
        @Body('name') name: string,
        @Body('price') price: number,
        @Body('description') description: string,
    ): Item {
        const item: Item = {
            id,
            name,
            price,
            description,
            status: ItemStatus.ON_SALE,
        }
        return this.itemService.create(item);
    }
}
