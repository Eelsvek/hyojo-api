import { Controller, Post, UseGuards, Request, Logger } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller()
export class AppController {
  private readonly logger = new Logger('AppController');

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    this.logger.log('req', req);
    return req.user;
  }
}