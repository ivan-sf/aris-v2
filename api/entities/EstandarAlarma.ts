import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, OneToMany, OneToOne, ManyToOne, ManyToMany, Generated, JoinColumn, JoinTable } from 'typeorm'

@Entity()

export class EstandarAlarma extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
     
    @Column({nullable:true})
    descripcion:string 
    @Column({nullable:true})
    procedimiento:string 
    @Column({nullable:true})
    titulo:string 
    @Column({nullable:true})
    prioridad:string 
    @Column({nullable:true})
    valorInicial:number 
    @Column({nullable:true})
    valorFinal:number 
    @Column({nullable:true})
    empresaId:string 
    @Column({nullable:true})
    fechaRegistro:Date 
    @Column({nullable:true})
    estadoRegistro:string
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    update_ad:Date
}
  