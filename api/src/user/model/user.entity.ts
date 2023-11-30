import { ConnectedUserEntity } from "src/chat/model/connected-user/connected-user.entity";
import { JoinedRoomEntity } from "src/chat/model/joined-room/joined-room.entity";
import { MessageEntity } from "src/chat/model/message/message.entity";
import { RoomEntity } from "src/chat/model/room/room.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column({unique: true})
	username: string;

	@Column({unique: true})
	email: string;

	@Column({select: false, nullable: true})
	password: string;

	@Column()
	score: number = 0;

	@Column()
	wins: number = 0;

	@Column()
	lost: number = 0;

	@ManyToMany(() => RoomEntity, room => room.users)
	rooms: RoomEntity[]

	@OneToMany(() => ConnectedUserEntity, connection => connection.user)
	connections: ConnectedUserEntity[]

	@OneToMany(() => JoinedRoomEntity, joinedRoom => joinedRoom.room)
	joinedRooms: JoinedRoomEntity[]

	@OneToMany(() => MessageEntity, message => message.user)
	messages: MessageEntity[]

	@BeforeInsert()
	@BeforeUpdate()
	emailToLowerCase() {
		this.email = this.email.toLowerCase();
		this.username = this.username.toLowerCase();
	}
}
