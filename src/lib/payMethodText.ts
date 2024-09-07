import { decl } from '@/app/lib/string/decl'

export const payMethodText = (value: number, currency: number, withNum: boolean = false) => {

  let adds = ''
  if (withNum) adds = '{} '

  if (currency === 1) return decl(adds + 'монета', adds + 'монеты', adds + 'монет', value)
  if (currency === 2) return decl(adds + 'сиана', adds + 'сианы', adds + 'сиан', value)
  if (currency === 3) return decl(adds + 'голос', adds + 'голоса', adds + 'голосов', value)
}