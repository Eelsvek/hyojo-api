import { Controller, Post, UseGuards, Request, Logger } from "@nestjs/common";
import { LocalAuthGuard } from "./auth/local-auth.guard";
@Controller()
export class AppController {
  private readonly logger = new Logger('AppController');

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    this.logger.log('req', req);
    return req.user;
  }
}