import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, OneToMany, OneToOne, ManyToOne, ManyToMany, Generated, JoinColumn, JoinTable } from 'typeorm'

@Entity()

export class Empresa extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
     
    @Column({nullable:true})
    nombre:string 
    @Column({nullable:true})
    nit:string 
    @Column({nullable:true})
    direccion:string 
    @Column({nullable:true})
    telefono:string 
    @Column({nullable:true})
    correoElectronico:string 
    @Column({nullable:true})
    fechaRegistro:Date 
    @Column({nullable:true})
    estadoRegistro:string
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    update_ad:Date
}
  