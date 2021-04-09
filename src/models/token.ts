import { LoginResponseDto } from '~/services/dtos/login.dto'

export class Token {
  accessToken?: string

  expiresIn?: number

  refreshToken?: string

  constructor(token: Token) {
    ;(Object as any).assign(this, token)
  }

  static from(dto: LoginResponseDto) {
    return new Token({
      accessToken: dto.access_token,
      refreshToken: dto.refresh_token,
      expiresIn: dto.expires_in,
    })
  }

  static fromMap(tokens: LoginResponseDto[]) {
    return tokens.map(this.from)
  }
}
