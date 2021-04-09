export interface LoginResponseDto {
  readonly token_type: string
  readonly expires_in: number
  readonly access_token: string
  readonly refresh_token: string
}
