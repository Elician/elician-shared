import { ReactNode } from 'react'

interface Props {
  pattern: RegExp,
  decorator: (match: string, i: number) => ReactNode,
  input: string
}

export const regexParse = (props: Props) => {
  const {
    pattern,
    decorator,
    input
  } = props
  const output = []

  let matchIndex = 0
  let processedInput = input
  let result = pattern.exec(processedInput)

  while (result !== null) {
    const matchStartAt = result.index
    const match = result[0]

    const contentBeforeMatch = processedInput.substring(0, matchStartAt)
    const decoratedMatch = decorator(match, matchIndex)

    output.push(contentBeforeMatch)
    output.push(decoratedMatch)
    processedInput = processedInput.substring(matchStartAt + match.length, processedInput.length + 1)

    pattern.lastIndex = 0

    result = pattern.exec(processedInput)

    ++matchIndex
  }

  if (processedInput) {
    output.push(processedInput)
  }

  return output
}