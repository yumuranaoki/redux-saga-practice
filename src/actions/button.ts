const INCREMENT = "INCREMENT"
const SUCCESS_INCREMENT = "SUCCESS_INCREMENT"

export type ButtonActions = {
  increment: typeof increment,
}

export const increment = () => ({
  type: "INCREMENT" as typeof INCREMENT
})

export const successIncrement = () => ({
  type: "SUCCESS_INCREMENT" as typeof SUCCESS_INCREMENT
})