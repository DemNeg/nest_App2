/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PersonneAddDto } from 'src/personne/dtos/personne_add.dto';
import { PersonneEditDto } from 'src/personne/dtos/personne_edit.dto';
import { PersonneEntity } from 'src/personne/entities/personne.entity';

@Injectable()
export class PersonneService {
    
    personnes : PersonneEntity[];

    constructor(){
        this.personnes = [];
    }

    //retourne la liste des personnes
    getAllPersonnes():PersonneEntity[]{
        return this.personnes;
    }

    //retourne une personne en fonction de son id
    getOnePersonne(id:number):PersonneEntity{
        const personne = this.personnes.find((personneCourant:PersonneEntity) => personneCourant.id === id);
        if(personne){
            return personne;
        }
       throw new NotFoundException(`Not Todo with id : ${id} `);
    }

    // Ajoute une personne
    addPersonne(newPersonne:PersonneAddDto){
        const personne: PersonneEntity ={
            nom: newPersonne.nom,
            prenom: newPersonne.prenom,
            age: newPersonne.age,
            adresse: newPersonne.adresse,
            email: newPersonne.email,
            dateCreation: new Date(),
            active: true,
            id: 0
        }

        if(this.personnes.length){
             personne.id = this.personnes[this.personnes.length-1].id + 1;
        }else{
            personne.id = 1;
        }

        this.personnes.push(personne);
    return personne;
    }

    // Met a jour une personne
    miseAjourPersonne(id:number,newPersonne:PersonneEditDto){

        const personne = this.getOnePersonne(id);
        if(personne){
            personne.nom = newPersonne.nom;
            personne.prenom = newPersonne.prenom;
            personne.age = newPersonne.age;
            personne.adresse = newPersonne.adresse;
            personne.active = newPersonne.active;
        }


    }

    // Met a jour les attributs de la personne qui ont chqangé
    editPartiellePersonne(id:number, newPersonne:Partial<PersonneEditDto>){
        const personne = this.getOnePersonne(id);
        if(personne){
            personne.nom = newPersonne.nom?newPersonne.nom:personne.nom;
            personne.prenom = newPersonne.prenom?newPersonne.prenom:personne.prenom;
            personne.age = newPersonne.age?newPersonne.age:personne.age;
            personne.adresse = newPersonne.adresse?newPersonne.adresse:personne.adresse;
            personne.active = newPersonne.active?newPersonne.active:personne.active;
        }
    }

    // Supprime une personne 
    delete(id: number){
        const index= this.personnes.findIndex((personneCourant:PersonneEntity) => personneCourant.id === id);
        // splice to delete it
        if(index >= 0)
        {
            this.personnes.splice(index, 1);
        }else{
            throw new NotFoundException('personne avec  id= '+id+' est introuvable')
        }

    return {
            message: 'personne avec id='+id+ "supprimer avec success",
            };
    }
}
