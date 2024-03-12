import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    findAll() {
        return 'Hello NestJS!! findAll()';
    }
}
