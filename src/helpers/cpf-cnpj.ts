import { cnpj } from "cpf-cnpj-validator";

export function cnpjIsValid(value: string) {
  return cnpj.isValid(value)
}

export function formatCnpj(value: string){
  return cnpj.format(value)
}

export function cnpjToNumber(value: string){
  return value.replace(/\D+/g, '')
}