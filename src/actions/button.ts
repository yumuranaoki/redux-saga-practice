const INCREMENT = "INCREMENT"

export type ButtonActions = {
  increment: typeof increment,
}

export const increment = () => ({
  type: "INCREMENT" as typeof INCREMENT
})