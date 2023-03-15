import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, OneToMany, OneToOne, ManyToOne, ManyToMany, Generated, JoinColumn, JoinTable } from 'typeorm'

@Entity()

export class Fisiometria extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
     
    @Column({nullable:true})
    userId:string 
    @Column({nullable:true})
    empresaId:string 
    @Column({nullable:true})
    ritmoCardiaco:number 
    @Column({nullable:true})
    ritmoRespiratorio:number 
    @Column({nullable:true})
    oximetria:number 
    @Column({nullable:true})
    presionArterialSistolica:number 
    @Column({nullable:true})
    presionArterialDiastolica:number 
    @Column({nullable:true})
    temperatura:number 
    @Column({nullable:true})
    suenoSuperficial:number 
    @Column({nullable:true})
    suenoProfundo:number 
    @Column({nullable:true})
    vecesDespierto:number 
    @Column({nullable:true})
    numeroPasos:number 
    @Column({nullable:true})
    valorIndice:number 
    @Column({nullable:true})
    estandarAlarma:string 
    @Column({nullable:true})
    valorAlarma1:number 
    @Column({nullable:true})
    valorAlarma2:number 
    @Column({nullable:true})
    valorAlarma3:number 
    @Column({nullable:true})
    fechaRegistro:Date 
    @Column({nullable:true})
    fechaToma:Date 
    @Column({nullable:true})
    estadoRegistro:string
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    update_ad:Date
}
  