import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, OneToMany, OneToOne, ManyToOne, ManyToMany, Generated, JoinColumn, JoinTable } from 'typeorm'

@Entity()

export class PerfilUsuario extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
     
    @Column({nullable:true})
    userId:string 
    @Column({nullable:true})
    empresaId:string 
    @Column({nullable:true})
    edad:string 
    @Column({nullable:true})
    sexo:string 
    @Column({nullable:true})
    pesoKG:number 
    @Column({nullable:true})
    estaturaCM:number 
    @Column({nullable:true})
    condicionPrincipal:string 
    @Column({nullable:true})
    condicionSecundaria1:string 
    @Column({nullable:true})
    condicionSecundaria2:string 
    @Column({nullable:true})
    condicionSecundaria3:string 
    @Column({nullable:true})
    medicacion1:string 
    @Column({nullable:true})
    medicacion2:string 
    @Column({nullable:true})
    medicacion3:string 
    @Column({nullable:true})
    fechaRegistro:Date 
    @Column({nullable:true})
    estadoRegistro:string
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    update_ad:Date
}
  