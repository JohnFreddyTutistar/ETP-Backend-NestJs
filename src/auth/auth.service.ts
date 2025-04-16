import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateNewUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtSerive: JwtService,
  ) {}

  async register(createNewUserDto: CreateNewUserDto) {
    const user = await this.userService.finOneByEmail(createNewUserDto.email);

    if (user) {
      throw new BadRequestException('El correo ya existe');
    }

    return this.userService.create(createNewUserDto);
  }

  async login({ email, password }: LoginDto) {
    const user = await this.userService.finOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('El correo no existe');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('La contraseña no es correcta');
    }

    const payLoad = { email: user.email };

    const token = await this.jwtSerive.signAsync(payLoad);

    return { 
      access_token: token, 
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        secondName: user.secondName,
        firstLastName: user.firstLastName,
        secondLastName: user.secondLastName,
        phoneNumber: user.phoneNumber,
        rol: user.rol
      } 
    };
  }
}
