import { MallConfPageOutputDto } from '~/request/data-contracts'

export interface IDecorationsProps {
  value?: MallConfPageOutputDto
  onChange?: (data: MallConfPageOutputDto) => void
}
