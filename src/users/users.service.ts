import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // async validateUser(email: string, password: string): Promise<any> {
  //   const user = await this.userRepository.findOne({where: {email}});

  //   if(user && await bcrypt.compare(password, user.password)){
  //     const {password, ...result} = user;
  //     return result
  //   }
  //   return null
  // }

  // async login(user: any){
  //   const payload = { email: user.email, sub: user.id };
  //   return {
  //     access_token: this.jwServices.sign(payload)
  //   }
  // }

  finOneByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...restData } = createUserDto;

    // hasheamos la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = this.userRepository.create({
      ...restData,
      password: hashedPassword,
    });

    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOneBy({ id });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
