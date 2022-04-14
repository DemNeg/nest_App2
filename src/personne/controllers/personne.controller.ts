/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { PersonneAddDto } from '../dtos/personne_add.dto';
import { PersonneEditDto } from '../dtos/personne_edit.dto';
import { PersonneService } from '../services/personne/personne.service';

@Controller('personne')
export class PersonneController {
    
    constructor(private readonly personneService: PersonneService){}

    // Action pour retourner la liste des personnes
    @Get('all')
    getAllPersonnes()
    {
        return this.personneService.getAllPersonnes();
    }

    // Action pour retourner une seule personne
    @Get(':id')
    getOnePersonne(@Param('id')personneId)
    {
        return this.personneService.getOnePersonne(+personneId);
    }

    // Action pour ajouter une seule personne
    @Post('add')
    addPersonne(@Body()newPersonne:PersonneAddDto){
      return this.personneService.addPersonne(newPersonne);
    }

    // Action pour mettre à jour une  personne
    @Put('miseAjour/:id')
    miseAjourPersonne(@Param('id')personneId,@Body()newPersonne:PersonneEditDto){
        return this.personneService.miseAjourPersonne(+personneId,newPersonne);
    }

    // Action pour mettre à jour partiellement une  personne
    @Patch('editPartielle/:id')
    editPartiellePersonne(@Param('id')personneId,@Body()newPersonne:Partial<PersonneEditDto>){
       return this.personneService.editPartiellePersonne(+personneId,newPersonne)
    }

    // Action pour supprimer une  personne
    @Delete('remove/:id')
    deletePersonne(@Param('id')personneId){
        return this.personneService.deletePersonne(+personneId)
    }

}
