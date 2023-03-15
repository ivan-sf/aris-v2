import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity, OneToMany, OneToOne, ManyToOne, ManyToMany, Generated, JoinColumn, JoinTable } from 'typeorm'

@Entity()

export class Medicamento extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
     
    @Column({nullable:true})
    monograma:string 
    @Column({nullable:true})
    nombre:string 
    @Column({nullable:true})
    presentacion:string 
    @Column({nullable:true})
    laboratorio:string 
    @Column({nullable:true})
    accionTerapeutica:string 
    @Column({nullable:true})
    imagen:string 
    @Column({nullable:true})
    descripcion:string 
    @Column({nullable:true})
    habilitado:boolean 
    @Column({nullable:true})
    aplicacion:string 
    @Column({nullable:true})
    isStandardGel:string 
    @Column({nullable:true})
    isStandardMsps:string 
    @Column({nullable:true})
    indMuestraMedica:string 
    @Column({nullable:true})
    codAtc:string 
    @Column({nullable:true})
    atc:string 
    @Column({nullable:true})
    registroSanitario:string 
    @Column({nullable:true})
    principioActivo:string 
    @Column({nullable:true})
    uMedPrinActivo:string 
    @Column({nullable:true})
    viaAdministracion:string 
    @Column({nullable:true})
    cantidadPresentacion:string 
    @Column({nullable:true})
    valorRegistro:string 
    @Column({nullable:true})
    usuarioResponsable:string 
    @Column({nullable:true})
    fechaActualizacion:Date 
    @Column({nullable:true})
    isPrivatePublic:string 
    @Column({nullable:true})
    tabla:string 
    @Column({nullable:true})
    codigo:string 
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
  