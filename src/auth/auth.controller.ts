import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateNewUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() createNewUserDto: CreateNewUserDto) {
    return this.authService.register(createNewUserDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
